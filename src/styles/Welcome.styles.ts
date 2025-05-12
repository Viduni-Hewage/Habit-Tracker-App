import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -5,
  },
  logo: {
    height: 48,
    width: 48,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 14,
  },
  welcomeText: {
    alignItems: 'center',
    marginTop: -230,
  },
  welcomeHeading: {
    color: '#FFECCC',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  welcomeName: {
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  welcomeDescription: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  welcomeButtonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 999,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  welcomeButtonText: {
    color: '#4B5563',
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomeDivider: {
    marginBottom: 10,
    width: 100,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
  },
});
