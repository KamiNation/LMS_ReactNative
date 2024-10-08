import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";






export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    logo: {
        width: wp("23%"),
        height: hp("10%")
    },
    titleWrapper: {
        flexDirection: "row"
    },
    titleWrapper1: {
        position: "absolute",
        left: -28,
        top: -20,
    },
    titleText: {
        fontSize: hp("4%"),
        textAlign: "center"
    },
    titleTextShape2:{
        position: "absolute",
        right: -40,
        top: -20,
    },
    titleShape3:{
        position: "absolute",
        left: 60
    },
    dscpWrapper:{
        marginTop: 30
    },
    dscpText:{
        textAlign: "center",
        color: "#575757",
        fontSize: hp("2%")
    },
    buttonWrapper:{
        backgroundColor: "#2467EC",
        width: wp("92%"),
        paddingVertical: 18,
        borderRadius: 4,
        marginTop: 40
    },
    buttonText:{
        color: "white",
        textAlign: "center"
    },
    slideImages:{
        alignSelf: "center",
        marginBottom: 30,
    },
    welcomeButtonNext:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveHeight(5.5),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    }
})