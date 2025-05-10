import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/Splash.styles';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient colors={['#2D8ED7', '#693FDC']} style={styles.gradient}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo-Big.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>HABITZ</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;