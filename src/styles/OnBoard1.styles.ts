import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  skipContainer: {
    position: 'absolute',
    top: 20,
    right: 25,
    zIndex: 10,
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },
  skipArrow: {
    fontSize: 18,
    color: '#000',
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
     position: 'absolute',
    bottom: 50,
    zIndex: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 50,
    paddingHorizontal: 30,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9D74EF',
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#9D74EF',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  nextArrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;