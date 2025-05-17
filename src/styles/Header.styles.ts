import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  left: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  logo: {
    width: 30,
    height: 30,
  },
  right: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  menuIconContainer: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    backgroundColor: '#000000',
    width: '100%',
  },
});

export default styles;
