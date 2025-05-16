import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/OnBoard2.styles';

const Onboarding2Screen = ({ navigation }: any) => {
  const handleNext = () => {
    navigation.navigate('Ad3');
  };

  const handleSkip = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
            source={require('../assets/images/OnBoard2.png')}
            style={styles.container}
            resizeMode="cover"
        >
      <View style={styles.skipContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
          <Text style={styles.skipArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.title}>Stay Productive</Text>
        <Text style={styles.subtitle}>
          Track your progress and stay focused with a simple, distraction-free interface.
        </Text>

        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
          <Text style={styles.nextArrow}>»</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Onboarding2Screen;