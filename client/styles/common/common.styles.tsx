import { StyleSheet } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"


export const commonStyles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5
    },
    dotStyle:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5
    },
    activeDotStyles:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5
    },
    title: {
        fontSize: hp("3.5%"),
        textAlign: "center"
    },
    description: {
        fontSize: hp("2.5%"),
        textAlign: "center",
        color: "#575757"
    }
})