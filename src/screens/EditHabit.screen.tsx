import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import styles from '../styles/AddHabit.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EditHabitScreen = ({ route, navigation }: any) => {
  const { habit } = route.params;

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [habitName, setHabitName] = useState('');
  const [habitDescription, setHabitDescription] = useState('');
  const [frequency, setFrequency] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [customDate, setCustomDate] = useState(new Date());
  const [descriptionHeight, setDescriptionHeight] = useState(48);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    if (habit) {
      setHabitName(habit.name);
      setHabitDescription(habit.description);
      setFrequency(habit.frequency);
      setSelectedDay(habit.day || null);
      if (habit.customDate) {
        setCustomDate(new Date(habit.customDate));
      }
    }
  }, [habit]);

  const onChangeDate = (_event: DateTimePickerEvent, date?: Date) => {
    if (date) setCustomDate(date);
    setShowCalendar(Platform.OS === 'ios');
  };

  const renderFrequencyOptions = useMemo(() => (
    ['Daily', 'Weekly', 'Other'].map((option) => (
      <TouchableOpacity
        key={option}
        style={styles.freqBtn}
        onPress={() => {
          setFrequency(option);
          setSelectedDay(null);
          setShowCalendar(option === 'Other');
        }}
      >
        <View style={styles.radioCircle}>
          {frequency === option && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.freqBtnText}>{option}</Text>
      </TouchableOpacity>
    ))
  ), [frequency]);

  const handleSave = async () => {
    if (habitName.trim() === '') {
      setNameError(true);
      return;
    }

    if (!frequency) {
      Alert.alert('Please select frequency.');
      return;
    }

    const updatedHabit = {
      ...habit,
      name: habitName,
      description: habitDescription,
      frequency,
      day: selectedDay,
      customDate: frequency === 'Other' ? customDate.toISOString() : null,
    };

    try {
      const stored = await AsyncStorage.getItem('habits');
      let habits = stored ? JSON.parse(stored) : [];

      const index = habits.findIndex((h: any) => h.id === habit.id);
      if (index !== -1) {
        habits[index] = updatedHabit;
        await AsyncStorage.setItem('habits', JSON.stringify(habits));
      }

      navigation.goBack();
    } catch (e) {
      console.error('Error updating habit:', e);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader canGoBack={true} onMenuPress={() => setMenuVisible(true)} />
      <View style={styles.container}>
        <Text style={styles.heading}>Edit Habit</Text>
        <View style={styles.underline} />
        <View style={styles.addHabitContainer}>
          <Text style={styles.label}>Habit Name</Text>
          <TextInput
            style={[styles.input, nameError && { borderWidth: 1 }]}
            value={habitName}
            onChangeText={(text) => {
              setHabitName(text);
              if (text.trim() !== '') setNameError(false);
            }}
            placeholder={nameError ? '* Habit name is required' : 'Enter your habit name'}
            placeholderTextColor={nameError ? 'red' : '#999'}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.description, { height: Math.max(48, descriptionHeight) }]}
            value={habitDescription}
            onChangeText={setHabitDescription}
            placeholder="Enter the habit description"
            multiline
            onContentSizeChange={(event) =>
              setDescriptionHeight(event.nativeEvent.contentSize.height)}
          />

          <Text style={styles.label}>Frequency</Text>
          <View style={styles.frequencyOptions}>
            {renderFrequencyOptions}
          </View>

          {frequency === 'Weekly' && (
            <View style={styles.weekdayContainer}>
              {weekdays.map((day, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.weekdayBtn,
                    selectedDay === day && styles.weekdayBtnSelected,
                  ]}
                  onPress={() => setSelectedDay(day)}
                >
                  <Text
                    style={[
                      styles.weekdayText,
                      selectedDay === day && styles.weekdayTextSelected,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {frequency === 'Other' && showCalendar && (
            <DateTimePicker
              value={customDate}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={handleSave}
            >
              <Text style={styles.confirmButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {<MenuPopup visible={isMenuVisible} onClose={() => setMenuVisible(false)} />}
    </View>
  );
};

export default EditHabitScreen;


