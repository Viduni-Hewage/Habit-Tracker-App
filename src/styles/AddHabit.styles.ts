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
     addHabitContainer: {
      marginTop: -10,
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
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#9D74EF',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 25,
    fontSize: 16,
  },
  description: {
    minHeight: 48,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 25,
  },
 frequencyOptions: {
  flexDirection: 'column',
  marginBottom: 20,
  color: '#9D74EF',
},
  freqBtn: {
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 0,
},
  freqBtnText: {
    color: '#9D74EF',
    fontSize: 16,
    fontWeight: "400",
  },
  weekdayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  weekdayBtn: {
    width: 39,
    height: 39,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#9D74EF',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdayBtnSelected: {
    backgroundColor: '#9D74EF',
  },
  weekdayText: {
    color: '#333',
  },
  weekdayTextSelected: {
    color: '#fff',
  },
  radioCircle: {
  height: 20,
  width: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#444',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
},

selectedRb: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#444',
},
buttonRow: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginTop: 30,
     },
     button: {
       flex: 1,
       padding: 13,
       borderRadius: 8,
       alignItems: 'center',
       marginHorizontal: 14,
     },
     cancelButton: {
       backgroundColor: 'white',
       borderWidth: 1, 
       borderColor: 'black',
     },
     confirmButton: {
       backgroundColor: '#9d74ef',
       color: 'white',
     },
     cancelButtonText: {
       color: 'black',
       fontWeight: 'bold',
       fontSize: 17,
     },
     confirmButtonText:{
       color: 'white',
       fontWeight: 'bold',
       fontSize: 17,
     },
});

export default styles;
