import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from '../styles/SignUp.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }: any) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!name) {
      setNameError('* Name is required');
      isValid = false;
    } else if (!nameRegex.test(name)) {
      setNameError('* Only letters allowed');
      isValid = false;
    }

    if (!email) {
      setEmailError('* Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('* Invalid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('* Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('* Password must be at least 8 characters');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('* Confirm your password');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('* Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleNavigateToSignin = () => {
    navigation.navigate('Signin');
  };
  const handleSignUp = async () => {
  if (validateInputs()) {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Ad1');
    } catch (e) {
      console.error('Failed to save the user token:', e);
    }
  }
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
        <Text style={styles.subtitle1}>Let's make an account!</Text>
        <Text style={styles.subtitle2}>Create your timing!</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder={nameError || 'Enter your name'}
          placeholderTextColor={nameError ? 'red' : '#999'}
          autoCapitalize="words"
          value={name}
          onChangeText={text => {
            setName(text);
            setNameError('');
          }}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder={emailError || 'Enter your email'}
          placeholderTextColor={emailError ? 'red' : '#999'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setEmailError('');
          }}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder={passwordError || 'Enter your password'}
          placeholderTextColor={passwordError ? 'red' : '#999'}
          value={password}
          secureTextEntry={true}  
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
        />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          placeholder={confirmPasswordError || 'Enter your password again'}
          placeholderTextColor={confirmPasswordError ? 'red' : '#999'}
          value={confirmPassword}
          secureTextEntry={true}  
          onChangeText={text => {
            setConfirmPassword(text);
            setConfirmPasswordError('');
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleNavigateToSignin}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
