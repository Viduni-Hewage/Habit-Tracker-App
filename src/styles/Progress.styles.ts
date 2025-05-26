import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  mainContainer: {
       flex: 1,
       backgroundColor: '#ffffff',
       paddingTop: 40,
     },
     container: {
       padding: 18,
       marginTop: -5,
     },
     heading: {
       fontSize: 24,
       fontWeight: 'bold',
       color: '#9D74EF',
       marginTop: 20,
       marginBottom: 10,
       textAlign:'center',
     },
     underline: {
       height: 1,
       backgroundColor: '#9D74EF',
       width: wp('90%'),
       marginBottom: hp('6%'),
       alignSelf: 'center',
     },
     progressBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '500',
  },
  dateText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  subtitleText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default styles;
