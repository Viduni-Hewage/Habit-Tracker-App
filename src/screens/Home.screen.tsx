import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import styles from '../styles/Home.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';

type WeekDay = {
  day: string;
  date: string;
  fullDate: moment.Moment;
  isToday: boolean;
};

const HomeScreen = ({ navigation }: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);
  const today = moment().startOf('day');
  // const [completed, setCompleted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  React.useEffect(() => {
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

  useFocusEffect(
    React.useCallback(() => {
      const loadTasks = async () => {
        try {
          const storedTasks = await AsyncStorage.getItem('habits');
          if (storedTasks) {
                const parsedTasks = JSON.parse(storedTasks).map((task: any) => ({
            ...task,
            completed: task.completed ?? false,
          }));
          setTasks(parsedTasks);
          }
        } catch (error) {
          console.error('Error loading habits:', error);
        }
      };
      loadTasks();
    }, [])
  );

  // const handleCheck = () => {
  //   const newValue = !completed;
  //   setCompleted(newValue);

  //   if (newValue) {
  //     setShowCelebration(true); 
  //   }
  // };

  const deleteTask = async (index: number) => {
    try {
      const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('habits', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader canGoBack={false} onMenuPress={() => setMenuVisible(true)} />

      <View style={styles.centerBox}>
        <Text style={styles.sectionTitle}>TODAY</Text>
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

      <ScrollView style={{ marginTop: 10, paddingHorizontal: 20 }}>
        {tasks.map((task, index) => (
          <LinearGradient
            key={index}
            colors={['#2E8ED8', '#6A40DC']}
            style={styles.taskBox}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.taskTitleContainer}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { task, index })}>
                <Text style={styles.edit}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>{task.description}</Text>
            <View style={styles.underline} />
            <View style={styles.checkAndTrashContainer}>
              <View style={styles.complete}>
                <Text style={styles.completeLabel}>Completed:</Text>
                <CheckBox
                  value={task.completed}
                  onValueChange={(newValue) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].completed = newValue;
                    setTasks(updatedTasks);
                    AsyncStorage.setItem('habits', JSON.stringify(updatedTasks));
                    if (newValue) setShowCelebration(true);
                    setTimeout(() => setShowCelebration(false), 15000);
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.trashIconContainer}
                onPress={() => deleteTask(index)}
              >
                <Image
                  source={require('../assets/images/trash.png')}
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}
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

      <Modal
        transparent
        animationType="fade"
        visible={showCelebration}
        onRequestClose={() => setShowCelebration(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setShowCelebration(false)}
            >
              <Image
                source={require('../assets/images/close.png')}
                style={styles.closeIcon}
              />
            </Pressable>
            <Image
              source={require('../assets/animations/congratulations.gif')}
              style={styles.celebrationGif}
            />
            <Image
                source={require('../assets/images/happy.png')}
                style={styles.popupImage}
              />
          </View>
        </View>
      </Modal>

      {<MenuPopup visible={isMenuVisible} onClose={() => setMenuVisible(false)} />}
    </View>
  );
};

export default HomeScreen;
