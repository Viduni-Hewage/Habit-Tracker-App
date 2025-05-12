import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/Splash.styles';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.splashSafeContainer}>
      <View style={styles.splashContainer}>
        <LinearGradient
          colors={['#82BAE4', '#A48CE7']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.splashGradient}
        >
          <View style={styles.splashContentContainer}>
            <Image
              source={require('../assets/images/logo-Big.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.splashText}>HABITZ</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;