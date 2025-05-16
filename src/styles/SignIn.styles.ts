import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: -40,
  },
  subtitle1: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  subtitle2: {
    fontSize: 19,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '500',
  },

  label: {
    fontSize: 16,
    marginBottom: 3,
    color: '#9D74EF',
    fontWeight: '900',
  },
  input: {
    height: 48,
    backgroundColor: '#757575',
    color:'#DDDCDC',
    marginBottom: 25,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonContainer: {
    backgroundColor: '#9D74EF',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 15,
    color: 'black',
  },
  linkText: {
    fontSize: 16,
    color: '#9D74EF',
    justifyContent: 'center',
    fontWeight: '600',
  },
  error:{
    color: 'white',
    fontSize: 13,
    marginTop: -25,
    marginLeft: 4,
    marginBottom:20,
  },
  logo:{
    width: 37,
    height: 37,
    marginLeft: 15,
    marginTop: -55,
  }
});

export default styles;
