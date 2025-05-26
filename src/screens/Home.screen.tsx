import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import styles from '../styles/Home.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type WeekDay = {
  day: string;
  date: string;
  fullDate: moment.Moment;
  isToday: boolean;
};



const HomeScreen = ({ navigation, route }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);
  const today = moment().startOf('day');
  const [selectedFilter, setSelectedFilter] = useState<'today' | 'all' | 'completed'>('today');
  const [habits, setHabits] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.filter) {
        setSelectedFilter(route.params.filter);
        navigation.setParams({ filter: undefined });
      }
    }, [route.params?.filter, navigation])
  );

  const getFilteredHabits = () => {
    const todayStr = moment().format('YYYY-MM-DD');
    const todayWeekdayFull = moment().format('dddd');
    const todayWeekdayShort = moment().format('ddd');

    return habits.filter(habit => {
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'completed') return habit.completedDates?.includes(todayStr);
      if (selectedFilter === 'today') {
        if (habit.frequency === 'Daily') return true;
         if (habit.frequency === 'Weekly') {
          return habit.day === todayWeekdayShort || habit.day?.toLowerCase() === todayWeekdayFull.toLowerCase();
        }
         if (habit.frequency === 'Other' && habit.customDate) {
          const habitDate = moment(habit.customDate).format('YYYY-MM-DD');
          return habitDate === todayStr;
        }
        return false;
      }
      return true;
    });
  };

   React.useEffect((): void => {
     const days = [];
     for (let i = 0; i < 5; i++) {
       const date = moment().add(i, 'days');
       days.push({
         day: date.format('ddd'),
         date: date.format('D'),
         fullDate: date,
         isToday: date.isSame(today, 'day'),
       });
     }
     setWeekDays(days);
   }, [today]);

  React.useEffect(() => {
    const loadHabits = async () => {
      try {
        const storedHabits = await AsyncStorage.getItem('habits');
        if (storedHabits) {
          setHabits(JSON.parse(storedHabits));
        }
      } catch (error) {
        console.error('Failed to load habits:', error);
      }
  };
    loadHabits();
  }, []);

  const toggleHabitCompleted = async (habitId: string) => {
    const todayStr = moment().format('YYYY-MM-DD');

    const updatedHabits = habits.map(habit => {
      if (habit.id !== habitId) return habit;

      const isCompleted = habit.completedDates?.includes(todayStr);
      let updatedDates;

      if (isCompleted) {
        updatedDates = habit.completedDates.filter((date: string) => date !== todayStr);
      } else {
        updatedDates = [...(habit.completedDates || []), todayStr];
      }

      return { ...habit, completedDates: updatedDates };
    });

    setHabits(updatedHabits);

    try {
      await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
    } catch (e) {
      console.error('Failed to update habits:', e);
    }
  };

  const handleDelete = async (habitId: string) => {
    try {
      const updatedHabits = habits.filter(habit => habit.id !== habitId);

      setHabits(updatedHabits);
      await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
    } catch (error) {
      console.error('Failed to delete habit:', error);
    }
  };

  const handleEdit = (habitId: string) => {
    const habitToEdit = habits.find(habit => habit.id === habitId);
    if (habitToEdit) {
      navigation.navigate('Edit', { habit: habitToEdit });

    }
  };

  const getScreenTitle = () => {
    switch (selectedFilter) {
      case 'all':
        return 'ALL HABITS';
      case 'completed':
        return 'COMPLETED HABITS';
      default:
        return 'TODAY';
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader canGoBack={false} onMenuPress={() => setMenuVisible(true)} />

      <View style={styles.centerBox}>
        <Text style={styles.sectionTitle}>{getScreenTitle()}</Text>
        <View style={styles.dateBox}>
          <FlatList
            horizontal
            data={weekDays}
            keyExtractor={(item) => item.fullDate.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.dateItem,
                  item.isToday && styles.selectedDateItem,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    item.isToday && styles.selectedDayText,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    item.isToday && styles.selectedDateText,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        {['today', 'all', 'completed'].map((type, index, arr) => (
          <React.Fragment key={type}>
            <TouchableOpacity onPress={() => setSelectedFilter(type as 'today' | 'all' | 'completed')}>
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === type && styles.selectedFilterText,
                ]}
              >
                {type.toUpperCase()}
              </Text>
            </TouchableOpacity>

            {index < arr.length - 1 && <Text style={styles.separator}>|</Text>}
          </React.Fragment>
        ))}
      </View>
      <ScrollView style = {styles.contentContainer}>
        {getFilteredHabits().length === 0 ? (
          <Text style = {styles.noHabitText}>
            No habits to display.
          </Text>
        ) : (
          getFilteredHabits().map((habit) => (
            <LinearGradient
              key={habit.id}
              colors={['#9D74EF', '#FFC6A4']}
              style={styles.habitCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
            <Pressable key={habit.id} style={styles.habitCard}>
              <View style={styles.habitContent}>
                <View style={styles.habitHeader}>
                  <Text style={styles.habitName}>{habit.name}</Text>
                  <CheckBox
                    value={habit.completedDates?.includes(moment().format('YYYY-MM-DD'))}
                    onValueChange={() => toggleHabitCompleted(habit.id)}
                    tintColors={{ true: 'white', false: '#aaa' }}
                  />
                </View>

                <Text style={styles.habitFreq}>
                  Frequency: {habit.frequency} {habit.frequency.toLowerCase() === 'weekly' ? `(${habit.day})` : ''}
                </Text>

                <View style={styles.line} />

                <View style={styles.buttonRow}>
                  <Pressable onPress={() => handleEdit(habit.id)}>
                    <Image source={require('../assets/images/edit.png')} style={styles.icon} />
                  </Pressable>
                  <Pressable onPress={() => handleDelete(habit.id)} style={styles.deleteBtn}>
                    <Image source={require('../assets/images/trash.png')} style={styles.icon} />
                  </Pressable>
                </View>
              </View>
            </Pressable>
          </LinearGradient>
          ))
        )}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomSquare} />
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Add')}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      {<MenuPopup visible={isMenuVisible} onClose={() => setMenuVisible(false)} />}
    </View>
  );
};

export default HomeScreen;