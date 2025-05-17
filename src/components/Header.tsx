import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/Header.styles';

interface CustomHeaderProps {
  canGoBack?: boolean;
  onMenuPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ canGoBack = false, onMenuPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={{ backgroundColor: '#000', marginTop: -23 }}>
      <View style={styles.header}>
        <View style={styles.left}>
          {canGoBack && (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../assets/images/backB.png')}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.right} onPress={onMenuPress}>
          <View style={styles.menuIconContainer}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
