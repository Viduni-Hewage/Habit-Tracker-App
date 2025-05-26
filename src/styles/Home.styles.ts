import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  centerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  centerBox: {
    marginTop: hp('1%'),
    marginHorizontal: 0,
    padding: 2,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 50,
    marginBottom: hp('2%'),
  },
  dateBox:{
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 19,
    marginTop: 30,
    marginLeft: 40,
    textAlign: 'left',
    color: 'white',
    fontWeight: '700',
    marginBottom: hp('2%'),
  },
  underline: {
    height: 1,
    backgroundColor: 'white',
    width: wp('83%'),
    marginTop: 5,
    marginBottom: 7,
    alignSelf: 'center',
  },
  bottomContainer: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end',
},

bottomSquare: {
  width: '100%',
  height: hp('9%'),
  backgroundColor: '#ffffff', 
},

floatingButton: {
  position: 'absolute',
  bottom: hp('4.7%'),
  width: 64,
  height: 64,
  borderRadius: 30,
  backgroundColor: '#9D74EF',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 4,
  borderColor: '#fff',
},

plusText: {
  color: 'white',
  fontSize: 32,
  fontWeight: 'bold',
},

sectionTitle: {
  fontSize: 23,
  fontWeight: 'bold',
  marginBottom: 23,
  marginLeft: 20,
  textAlign: 'left',

},

dateItem: {
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 12,
  marginRight: 10,
  borderRadius: 12,
},

selectedDateItem: {
  backgroundColor: '#A259FF',
  shadowColor: '#A259FF',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 4,
},

dayText: {
  fontSize: 14,
  color: 'black',
},

dateText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
},

selectedDayText: {
  color: 'white',
},

selectedDateText: {
  color: 'white',
},
filterContainer: {
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 10,
  gap: wp('7%'),
},

filterText: {
  fontSize: 16,
  color: '#555',
},
selectedFilterText: {
  color: '#9D74EF',
  fontWeight: 'bold',
},

separator: {
  marginHorizontal: 8,
  fontSize: 16,
  color: '#999',
},
contentContainer: {
  paddingBottom: 100,
},
noHabitText:{
  textAlign: 'center',
  marginTop: 20,
  color: '#999',
},
habitCard:{
  marginHorizontal: 20,
  marginBottom: 15,
  padding: 15,
  backgroundColor: '#F5F5F5',
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
habitName:{
  fontSize: 18,
  fontWeight: 'bold',
},
habitFreq:{
  fontSize: 14,
  color: '#666',
},

});

export default styles;
