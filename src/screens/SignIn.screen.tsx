import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from '../styles/SignIn.styles';

const SignInScreen = ({ navigation }: any) => {
    const handleNavigateToSignup = () => {
        navigation.navigate('SignUp');
    };
    const handleSignin = () => {
        navigation.navigate('Home');
    };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>HABITZ</Text>
            <Image
                source={require('../assets/images/logo-black.png')}
                style={styles.logo}
                resizeMode="contain"
            /> 
        </View>
        <Text style={styles.subtitle1}>Welcome Back !</Text>
        <Text style={styles.subtitle2}>Create your timing!</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password:</Text> 
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={handleSignin}
        >
          <Text style={styles.buttonText}>TAKE ME IN</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleNavigateToSignup}>
            <Text style={styles.linkText}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
