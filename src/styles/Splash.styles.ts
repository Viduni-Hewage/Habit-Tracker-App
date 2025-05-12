import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  splashSafeContainer: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
  },
  splashGradient: {
    flex: 1,
    width: width,
    height: height,
  },
  splashContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  splashText: {
    fontSize: 30,
    fontWeight: 900,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  splashTextWrapper: {
    marginTop: 16,
  }
});

export default styles;