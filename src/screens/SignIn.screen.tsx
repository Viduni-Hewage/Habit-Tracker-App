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
import styles from '../styles/SignIn.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInputs = () => {
    let valid = true;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameError('');
    setEmailError('');
    setPasswordError('');

    if (!name) {
      setNameError('* Name is required');
      valid = false;
    } else if (!nameRegex.test(name)) {
      setNameError('* Only letters allowed');
      valid = false;
    }

    if (!email) {
      setEmailError('* Email is required');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('* Invalid email address');
      valid = false;
    }

    if (!password) {
      setPasswordError('* Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('* Password must be at least 8 characters');
      valid = false;
    }

    return valid;
  };

    const handleNavigateToSignup = () => {
        navigation.navigate('Signup');
    };
    const handleSignin = async () => {
  if (validateInputs()) {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');
    } catch (e) {
      console.error('Failed to retrieve user data:', e);
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
        <Text style={styles.subtitle1}>Welcome Back !</Text>
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
