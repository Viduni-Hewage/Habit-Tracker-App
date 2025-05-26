import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../styles/Welcome.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WelcomeScreenProps = {
  navigation: any;
};

const WelcomeScreen: React.FC<WelcomeScreenProps>  = ({navigation}) => {

  const handleGetStarted = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.replace('Home');
      } else {
        navigation.replace('Signin');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      navigation.replace('Signin');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/welcomeBg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo-Big.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>HABITZ</Text>
        </View>

        <View style={styles.welcomeText}>
          <Text style={styles.welcomeHeading}>
            Hi, Welcome <Text style={styles.welcomeName}>to{'\n'}Habitz</Text>
          </Text>
          <Text style={styles.welcomeDescription}>
            Explore the app. Find some peace of mind{'\n'}
            to achieve good habits.
          </Text>
        </View>

        <View style={styles.welcomeButtonContainer}>
          <TouchableOpacity style={styles.getStartedButton}
          onPress={handleGetStarted}>
            <Text style={styles.welcomeButtonText}>GET STARTED   →</Text>
          </TouchableOpacity>
          <View style={styles.welcomeDivider} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
