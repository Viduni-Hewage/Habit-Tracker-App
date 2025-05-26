import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';
import styles from '../styles/Progress.styles';
import CustomHeader from '../components/Header';
import MenuPopup from '../components/Menu';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}

const CircularProgress = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = '#9D74EF',
  backgroundColor = '#E8E8E8',
}: CircularProgressProps) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [percentage, animatedValue]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: color }}>
          {Math.round(percentage)}%
        </Text>
      </View>
    </View>
  );
};

const ProgressScreen = ({ }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [todayProgress, setTodayProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [todayStats, setTodayStats] = useState({ completed: 0, total: 0 });
  const [overallStats, setOverallStats] = useState({ completed: 0, total: 0 });

  const getFilteredHabits = (habitsData: any[], filter: string) => {
    const todayStr = moment().format('YYYY-MM-DD');
    const todayWeekdayFull = moment().format('dddd');
    const todayWeekdayShort = moment().format('ddd');

    return habitsData.filter(habit => {
      if (filter === 'all') return true;
      if (filter === 'completed') return habit.completedDates?.includes(todayStr);
      if (filter === 'today') {
        if (habit.frequency === 'Daily') return true;
        if (habit.frequency === 'Weekly') {
          return habit.day === todayWeekdayShort || 
                habit.day?.toLowerCase() === todayWeekdayFull.toLowerCase();
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

  const calculateProgress = useCallback((habitsData: any[]) => {
    const todayStr = moment().format('YYYY-MM-DD');

    const todayHabits = getFilteredHabits(habitsData, 'today');
    const todayCompleted = todayHabits.filter(habit => 
      habit.completedDates?.includes(todayStr)
    ).length;
    const todayTotal = todayHabits.length;
    const todayPercentage = todayTotal > 0 ? (todayCompleted / todayTotal) * 100 : 0;

    setTodayProgress(todayPercentage);
    setTodayStats({ completed: todayCompleted, total: todayTotal });

    const allHabits = getFilteredHabits(habitsData, 'all');
    const allCompleted = getFilteredHabits(habitsData, 'completed').length;
    const allTotal = allHabits.length;
    const overallPercentage = allTotal > 0 ? (allCompleted / allTotal) * 100 : 0;

    setOverallProgress(overallPercentage);
    setOverallStats({ completed: allCompleted, total: allTotal });
  }, []);

  const loadHabits = useCallback(async () => {
    try {
      const storedHabits = await AsyncStorage.getItem('habits');
      if (storedHabits) {
        const habitsData = JSON.parse(storedHabits);
        calculateProgress(habitsData);
      }
    } catch (error) {
      console.error('Failed to load habits:', error);
    }
  }, [calculateProgress]);

  useFocusEffect(
    useCallback(() => {
      loadHabits();
    }, [loadHabits])
  );

  return (
    <View style={styles.mainContainer}>
      <CustomHeader canGoBack={true} onMenuPress={() => setMenuVisible(true)} />
      <View style={styles.container}>
        <Text style={styles.heading}>Progress</Text>
        <View style={styles.underline} />

        <View style={styles.progressBox}>
          <Text style={styles.boxTitle}>Today's Progress</Text>
          <View style={styles.progressContent}>
            <CircularProgress
              percentage={todayProgress}
              color="#9D74EF"
              size={100}
            />
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>
                {todayStats.completed} of {todayStats.total} habits completed
              </Text>
              <Text style={styles.dateText}>
                {moment().format('MMMM DD, YYYY')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.progressBox}>
          <Text style={styles.boxTitle}>Overall Progress</Text>
          <View style={styles.progressContent}>
            <CircularProgress
              percentage={overallProgress}
              color="#4CAF50"
              size={100}
            />
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>
                {overallStats.completed} of {overallStats.total} habits completed today
              </Text>
              <Text style={styles.subtitleText}>
                From all your habits
              </Text>
            </View>
          </View>
        </View>
      </View>
      <MenuPopup visible={isMenuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
};

export default ProgressScreen;