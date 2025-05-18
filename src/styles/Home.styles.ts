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
  taskBox: {
    padding: wp('2%'),
    paddingLeft: wp('4%'),
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
    color: 'white',
  },
  description: {
    fontSize: 15,
    marginBottom: 4,
    color: 'white',
  },
  complete: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: 'white',
  },
  completeLabel: {
  fontSize: 16,
  marginRight: 8,
},
  underline: {
    height: 1,
    backgroundColor: 'white',
    width: wp('83%'),
    marginTop: 5,
    marginBottom: 7,
    alignSelf: 'center',
  },
  checkAndTrashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trashIconContainer: {
    padding: 5,
  },
  trashIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  taskTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  edit:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
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
modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

popupContainer: {
  width: 300,
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 20,
  alignItems: 'center',
  position: 'relative',
},

celebrationGif: {
  width: 200,
  height: 150,
  marginBottom: 10,
},

popupText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginTop: 10,
},

closeButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  padding: 5,
  zIndex: 1,
},

closeIcon: {
  width: 20,
  height: 20,
},


});

export default styles;
