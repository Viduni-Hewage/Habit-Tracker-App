import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/OnBoard3.styles';

const Onboarding3Screen = ({ navigation }: any) => {
  const handleNext = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
            source={require('../assets/images/OnBoard1.png')}
            style={styles.container}
            resizeMode="cover"
        >

      <View style={styles.bottomContent}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.subtitle}>
          You're ready to start using “HABITZ” to manage your habits and stay organized.
        </Text>

        <View style={styles.paginationContainer}>
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={[styles.paginationDot, styles.activeDot]} />
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
export default Onboarding3Screen;