import {StyleSheet} from 'react-native';
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
    flex: 0.05,
    marginTop: 25,
    margin: 20,
    flexDirection: 'row',
  },
  headingText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1F244B',
  },
  headingText_color: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#DFA72C',
  },
  form: {
    flex: 0.15,
    marginHorizontal: 18,
    marginTop: 15,
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
  forgotBody: {
    flex: 0.5,
    marginTop: 15,
    // justifyContent:'center',
    alignSelf: 'center',
  },
  forgotText: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
  },
  btnBody: {
    flex: 0.2,
    marginTop: 20,
    alignSelf: 'center',
  },
  option_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    textAlign: 'center',
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
  optionBody: {
    flex: 0.1,
    //backgroundColor:'green',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 25,
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
    bottom: 15,
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
    color: '#DFA72C',
    textAlign: 'center',
    textDecorationLine: 'underline',
    right: 5,
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
});
export default styles;