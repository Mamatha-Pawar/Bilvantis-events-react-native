import React, {useState, useEffect,useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,Animated,Easing
} from 'react-native';
import OTPTextView from "react-native-otp-textinput";
import {useFocusEffect} from '@react-navigation/native'; // Import useFocusEffect
import {LoginStyles,appColors} from '../utils/styles/commonStyles';
const LoginScreen = ({navigation}) => {
  const scrollAnim = useRef(new Animated.Value(0)).current; // Create animated value
  const [isKeyboadVisible, setisKeyboadVisible] = useState(false);
  const [otps, setotps] = useState('');
  useEffect(() => {
    // Function to start scrolling animation
    const startScrolling = () => {
      Animated.loop(
        Animated.timing(scrollAnim, {
          toValue: 1,
          duration: 7000, // Adjust the duration to control speed
          easing: Easing.linear, // Linear scrolling effect
          useNativeDriver: true, // Enable native driver for performance
        }),
      ).start();
    };

    startScrolling();
  }, [scrollAnim]);

  // Scroll by changing the translateX value over time
  const translateX = scrollAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0], // Distance for scrolling, adjust based on text length
  });

  const [email, setEmail] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [otp, setOtp] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setEmail('');
      setIsOTPSent(false);
      setOtp('');
    }, []),
  );

  const handleLogin = () => {
    if (email.trim() !== '') {
      setIsOTPSent(true);
      Alert.alert('OTP Sent', `An OTP has been sent to ${email}`);
    } else {
      Alert.alert('Login Failed', 'Please enter a valid email');
    }
  };

  const handleOTPVerify = () => {
    if (otp.length === 6) {
      navigation.navigate('Profile');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 6-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
    
     
      {!isOTPSent ? (
        <>
          {/* <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none" 
          /> */}
           <View style={styles.marqueeContainer}>
        <Animated.Text
          style={[
            styles.marqueeText,
            { transform: [{ translateX }] }, // Apply horizontal scrolling
          ]}
        >
                            Welcome back! Glad to see you, Again!
                            </Animated.Text>
      </View>
          <TextInput
style={[LoginStyles.input, styles.inputStyle]}         
   onChangeText={setEmail}
            // maxLength={10}
            numberOfLines={1}
            mode="outlined"
            editable
            outlineColor="#00000026"
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'} // 50% opacity black
            value={email}
            activeOutlineColor="#172D76"
            // keyboardType="number-pad"
            placeholder="Enter your Email."
            outlineStyle={{borderRadius: 8}}
          />

          {/* <Button title="Send OTP" onPress={handleLogin} /> */}
          <Pressable style={LoginStyles.sendOTPView} onPress={handleLogin}>
            <Text style={LoginStyles.OTPButton}>Send OTP</Text>
          </Pressable>
        </>
      ) : (
        <>
          {/* <TextInput
            style={styles.input}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={6}
          /> */}
           {/* <TextInput
            style={[LoginStyles.input]}
            onChangeText={setOtp}
            maxLength={6}
            numberOfLines={1}
            mode="outlined"
            editable
            outlineColor="#00000026"
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'} // 50% opacity black
            value={otp}
            activeOutlineColor="#172D76"
            keyboardType="number-pad"
            placeholder="Enter 6-digit OTP"
            outlineStyle={{borderRadius: 8}}
          /> */}
           <Text style={LoginStyles.welcomeBackText}>
                                OTP Verification
                            </Text>
                            <Text style={[styles.text, { opacity: 0.5 }]}>
                                Enter the verification code we just sent on your mobile number.
                            </Text>
            <OTPTextView
                                containerStyle={styles.OTPContainer}
                                handleTextChange={(text) => {
                                  setOtp(text);
                                  setisKeyboadVisible(true);
                              }}
                                textInputStyle={styles.OTPText}
                                inputType="text"
                                tintColor={appColors.themeColor}
                                inputCount={6}

                                offTintColor={appColors.backgroundColor}
                            />
          {/* <Button title="Login" onPress={handleOTPVerify} /> */}
          <Pressable style={LoginStyles.sendOTPView} onPress={handleOTPVerify}>
            <Text style={LoginStyles.OTPButton}>Login</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputStyle: {
    paddingLeft: 15, // Adds left margin after placeholder
    borderWidth: 1, // Border width
    borderColor: appColors.themeColor, // Border color
    borderRadius: 8, // Border radius to match outline
},
  marqueeText:{
color:appColors.themeColor,
fontSize:18
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.textColor,
    marginTop: 10,
    lineHeight: 24,
    fontFamily: "Regular",
},
  OTPText: {
    borderRadius: 6, borderWidth: 1, width: 40, height: 40, padding: 3,shadowColor: 'transparent', // Or remove this line if it exists
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0, // Or remove this line if it exists
    elevation: 0,
},
OTPContainer: {
  marginTop: 16
},
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: -100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
