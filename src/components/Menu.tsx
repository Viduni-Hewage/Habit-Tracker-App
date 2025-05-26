import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Menu.styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

interface MenuPopupProps {
  visible: boolean;
  onClose: () => void;
}

type RootStackParamList = {
  Home: { filter?: 'today' | 'all' | 'completed' } | undefined;
  Profile: undefined;
  Settings: undefined;
  Login: undefined;
  Progress: undefined;
};

type MenuPopupNavigationProp = StackNavigationProp<RootStackParamList>;

const MenuPopup = ({ onClose, visible }: MenuPopupProps) => {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = useState(visible);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const navigation = useNavigation<MenuPopupNavigationProp>();

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.4,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: width,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShouldRender(false);
    });}
  }, [backdropOpacity, slideAnim, visible]);

  const handleNavigation = (screen: string) => {
    setSelectedItem(screen);
    setTimeout(() => {
      navigation.navigate(screen as never);
      onClose();
    }, 200);
  };

  const handleFilterNavigation = (filter: 'today' | 'all' | 'completed') => {
    setSelectedItem(`${filter}Habits`);
    setTimeout(() => {
      navigation.navigate('Home', { filter });
      onClose();
    }, 200);
  };


  const handleSignOut = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.replace('Login');
    onClose();
  };

  if (!shouldRender) {return null;}

  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButtonTop}>
          <Image
              source={require('../assets/images/close.png')}
              style={styles.closeimage}
              resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.headingRow}></View>
        <TouchableOpacity
          onPress={() => handleNavigation('Home')}
          style={[
            styles.item,
            selectedItem === 'Home' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/home.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation('Profile')}
          style={[
            styles.item,
            selectedItem === 'Profile' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation('Settings')}
          style={[
            styles.item,
            selectedItem === 'Settings' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/settings.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleFilterNavigation('all')}
          style={[
            styles.item,
            selectedItem === 'allHabits' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/check-box.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>All Habits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleFilterNavigation('completed')}
          style={[
            styles.item,
            selectedItem === 'completedHabits' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/check-box.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Completed Habits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation('Progress')}
          style={[
            styles.item,
            selectedItem === 'Progress' && styles.activeItem,
          ]}
        >
          <Image
            source={require('../assets/images/progress.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Progress</Text>
        </TouchableOpacity>

        <View style={styles.signOutContainer}>
          <TouchableOpacity
            style={styles.signOutRow}
            onPress={handleSignOut}
          >
            <Text style={styles.signoutText}>Sign Out</Text>
            <Image
              source={require('../assets/images/front-arrow.png')}
              style={styles.signoutImage}
              resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default MenuPopup;
