import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop: 40,
    },
    container: {
      padding: 18,
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
        color: '#9D74EF',
        fontWeight: 800,
    },
    input: {
        minHeight: 45,
        backgroundColor: '#767676',
        color:'#DDD9D9',
        marginBottom: 25,
        paddingHorizontal: 12,
        borderRadius: 6,
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
    inputIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: '#767676',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
      },
      inputText: {
        fontSize: 16,
        color: '#999494',
      },
      image1:{
        width: 23,
        height: 23,
        marginRight: wp('3%'),
      },
      image2:{
        width: 20,
        height: 20,
        marginRight: wp('3%'),
      },
      description:{
        paddingBottom: 70,
        
      },
      dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#767676',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 13,
    marginBottom: 25,
  },
  dropdownButtonText: {
    color: '#DDD9D9',
    fontSize: 16,
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#999494',
  },
  dropdownContainer: {
    backgroundColor: '#767676',
    borderRadius: 6,
    marginTop: -20,
    marginBottom: 20,
    zIndex: 1000,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  dropdownItemActive: {
    backgroundColor: '#9D74EF',
  },
  dropdownItemText: {
    color: '#DDD9D9',
    fontSize: 16,
  },
  dropdownItemTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  });

  export default styles;