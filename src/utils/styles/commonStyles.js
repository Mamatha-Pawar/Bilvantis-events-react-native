import { StyleSheet } from 'react-native';
export const appColors = {
  activeColor: "#00C5E4",
  textColorBlack: "#151812",
  textColorWhite: "#FFFFFF",
  backgroundColor: "#EBEBEB",
  greyColor: "#898D88",
  tabBarLine: "#D0DDF5",
  borderColor: "#E2E2E2",
  themeColor: "#edac15",
  textColor: "#222222",
  lightTextColor: "#b8b6b6",
  outlinColor:"#00000026"
}

export const fontFamilyStrings = {
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
  Bold: 'Poppins-Bold',
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
}

export const fontWeightValue = {
  weight100: '100',
  weight200: '200',
  weight300: '300',
  weight400: '400',
  weight500: '500',
  weight600: '600',
  weight700: '700',
  weight800: '800',
  weight900: '900',
}


export const commonStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,  
        paddingBottom: 20, 
      },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
    
});




export const functionalstyles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: "skyblue",
      borderRadius: 5,
    },
    name: {
      fontSize: 18,
      color: '#333',
    },
  });
  export const LoginStyles = StyleSheet.create({
    loginMainView: {
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        padding: 20,
    },
    bottomView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
    input: {
        height: 56,
        borderWidth: 0,
        borderRadius: 8,
        marginTop: 20,
        paddingLeft: 14,
        paddingLeft: -10,
        borderColor: appColors.textColor,
        color: appColors.textColor,
        backgroundColor: 'white'
    },
    welcomeBackText: {
        marginTop: 20,
        fontSize: 26,
        color: "#1E232C",
        fontFamily: fontFamilyStrings.SemiBold,
        letterSpacing:0
    },
    logo_image: {
        width: "100%",
        height: 205,
        marginTop: 20
    },
    sendOTPView: {
        backgroundColor: appColors.themeColor,
        borderRadius: 8,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        marginTop: 20
    },
    disbaledButton: {
        backgroundColor: "#f0ffff",
        borderRadius: 8,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        marginTop: 40
    },
    OTPButton: {
        color: "white",
        fontSize: 15,
        fontWeight: fontWeightValue.weight500,
        fontFamily: fontFamilyStrings.SemiBold,
    },
    disbaledOTPButton: {
        color: "black",
        fontSize: 15,
        fontWeight: fontWeightValue.weight500,
        fontFamily: fontFamilyStrings.SemiBold,
    },
    accountText: {
        color: appColors.textColor,
        fontSize: 15,
        fontWeight: fontWeightValue.weight500
    },
    adminText: {
        color: '#F79364',
        fontSize: 15,
        fontWeight: fontWeightValue.weight500,
        marginLeft: 5
    },
    error: {
        color: 'red'
    }
});
