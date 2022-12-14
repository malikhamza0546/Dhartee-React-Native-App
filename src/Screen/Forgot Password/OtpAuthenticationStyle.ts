import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor:'#006AFF'
  },
  headerView: {
    flex: 0.15,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  backArrow_img: {
    alignSelf: 'center',
    marginTop: 30,
  },
  logo_gharbar: {
    alignSelf: 'center',
    marginTop: 22,
    marginRight: 60,
    borderWidth: 1,
    width: hp(10),
    resizeMode: 'contain',
  },
  bodyView: {
    flex: 0.85,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bodyHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.05,
    marginTop: 25,
    marginHorizontal: 20,
  },
  headingText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1F244B',
  },
  headingText_WeSent: {
    color: '#1F244B',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  OTP: {
    color: '#DFA72C',
    fontFamily: 'Montserrat',
    fontSize: 24,
  },
  To: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    color: '#1F244B',
  },
  yourNumber_View: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.05,
    marginTop: 0,
    marginHorizontal: 20,
  },
  yourNumber_text: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#1F244B',
  },
  mobileNumber_text: {
    color: '#DFA72C',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  textInput_OTP: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#979BB5',
    fontSize: wp(5),
    paddingLeft: wp(6.5),
    color: 'black',
  },
  bodyHeading_desc: {
    flex: 0.05,
    marginHorizontal: 20,
    marginTop: 15,
  },
  headingText_desc: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
  },
  form: {
    flex: 0.7,
    marginHorizontal: 18,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
  },
  formHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    marginHorizontal: 2,
  },
  formField_email: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',
    borderColor: '#979BB5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 7,
  },
  formInput_email: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    marginHorizontal: 15,
  },
  nameValidation: {
    flex: 0.05,
    marginHorizontal: 18,
    marginTop: 7,
    flexDirection: 'row',
  },
  nameValidation_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#FD0707',
  },
  formInput_password: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    marginHorizontal: 15,

    flex: 1,
  },
  formField_password: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    color: 'black',
    flexDirection: 'row',

    borderColor: '#979BB5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 7,
  },
  passwordDesc_View: {
    flex: 0.15,
    marginHorizontal: 20,
    marginTop: 7,
  },
  passwordDesc_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#555568',
  },
  checkboxContainer: {
    flex: 0.15,
    marginHorizontal: 20,
    marginTop: 7,
    flexDirection: 'row',
  },

  checkboxText: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#555568',
    marginTop: 5,
  },
  btnBody: {
    flex: 0.2,
    marginTop: 20,
    alignSelf: 'center',
  },
  code_not_recieved_View: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  code_not_recieved_TextInput: {
    color: '#77838F',
    fontFamily: 'Montserrat',
  },
  btnSign_in: {
    backgroundColor: '#DFA72C',
    padding: 17,
    width: 315,
    height: 60,
    borderRadius: 16,
  },
  btnSign_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  middleView: {
    flex: 0.2,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signDesc: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#555568',
    textAlign: 'center',
  },
  termConditiontext: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#006AFF',
    textAlign: 'center',
  },
  optionBody: {
    flex: 0.1,
    //backgroundColor:'green',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 25,
  },
  option_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    textAlign: 'center',
  },
  btn_SocialMedia: {
    backgroundColor: '#FEFCFF',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 2,
    padding: 15,
    width: 315,
    height: 60,
    borderRadius: 16,
  },
  btn_SocialMedia_text: {
    fontSize: 18,
    color: '#06192C',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  footer: {
    flex: 0.2,
    marginHorizontal: 15,
    marginTop: 30,
    bottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  footer_Text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#555568',
    textAlign: 'center',
  },
  footer_Text_Color: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#006AFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    right: 5,
  },
});
export default styles;
