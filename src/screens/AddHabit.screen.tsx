import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/AddHabit.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddHabitScreen = ({ navigation }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [frequency, setFrequency] = useState('daily');
    const [showFrequencyDropdown, setShowFrequencyDropdown] = useState(false);

    const getFrequencyText = () => {
    switch (frequency) {
      case 'daily':
        return 'Daily';
      case 'weekly':
        return 'Weekly';
      case 'monthly':
        return 'Monthly';
      default:
        return 'Select Frequency';
    }
  };  
    const saveTask = async () => {
        const task = { title, description, frequency };
        try {
          const storedTasks = await AsyncStorage.getItem('habits');
          const tasks = storedTasks ? JSON.parse(storedTasks) : [];
          tasks.push(task);
          await AsyncStorage.setItem('habits', JSON.stringify(tasks));
        } catch (error) {
          console.error('Error saving habits:', error);
        }
      };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader canGoBack={true} onMenuPress={() => setMenuVisible(true)}/>
      <View style={styles.container}>
        <Text style={styles.heading}>Add Habit</Text>
        <View style={styles.underline} />

        <Text style={styles.label}>Habit Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your habit"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Frequency</Text>
        <TouchableOpacity 
          style={styles.dropdownButton}
          onPress={() => setShowFrequencyDropdown(!showFrequencyDropdown)}
        >
          <Text style={styles.dropdownButtonText}>{getFrequencyText()}</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity>

        {showFrequencyDropdown && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity 
              style={[styles.dropdownItem, frequency === 'daily' && styles.dropdownItemActive]}
              onPress={() => {
                setFrequency('daily');
                setShowFrequencyDropdown(false);
              }}
            >
              <Text style={[styles.dropdownItemText, frequency === 'daily' && styles.dropdownItemTextActive]}>Daily</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.dropdownItem, frequency === 'weekly' && styles.dropdownItemActive]}
              onPress={() => {
                setFrequency('weekly');
                setShowFrequencyDropdown(false);
              }}
            >
              <Text style={[styles.dropdownItemText, frequency === 'weekly' && styles.dropdownItemTextActive]}>Weekly</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.dropdownItem, frequency === 'monthly' && styles.dropdownItemActive]}
              onPress={() => {
                setFrequency('monthly');
                setShowFrequencyDropdown(false);
              }}
            >
              <Text style={[styles.dropdownItemText, frequency === 'monthly' && styles.dropdownItemTextActive]}>Monthly</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Enter habit description"
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={async () => {
              await saveTask();
              navigation.goBack();
            }}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {<MenuPopup visible = {isMenuVisible} onClose={() => setMenuVisible(false)}  />}
    </View>
  );
};

export default AddHabitScreen;


