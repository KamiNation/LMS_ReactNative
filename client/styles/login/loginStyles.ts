import { StyleSheet } from "react-native";




export const loginStyles = StyleSheet.create({
    signInImage: {
        width: "60%",
        height: 250,
        alignSelf: "center",
        marginTop: 50,
    },
    welcomeText: {
        textAlign: "center",
        paddingTop: 24
    },
    learningText: {
        textAlign: "center",
        fontSize: 15,
        marginTop: 5,
        color: "#575757"
    },
    inputContainer: {
        marginTop: 20,
        rowGap: 30,
        marginHorizontal: 16
    },
    input: {
        height: 50,
        marginHorizontal: 16,
        borderRadius: 8,
        paddingLeft: 35,
        fontSize: 16,
        backgroundColor: "white",
        color: "#A1A1A1",

    },
    visibleIcons: {
        position: "absolute",
        right: 30,
        top: 15,
    },
    icon2: {
        position: "absolute",
        left: 24,
        top: 17.8,
        marginTop: -2
    },
    forgotSection: {
        marginHorizontal: 16,
        textAlign: "right",
        fontSize: 16,
        marginTop: -20
    },
    signupRedirect: {
        flexDirection: "row",
        marginHorizontal: 16,
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 10
    }
})