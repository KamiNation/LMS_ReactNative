import { StyleSheet } from "react-native";




export const forget = StyleSheet.create({
    backText:{
        fontSize: 16
    },
    loginText: {
        color: "#3876EE",
        marginLeft: 5,
        fontSize: 16
    },
    loginLink: {
        flexDirection: "row",
        marginTop: 30,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#3876EE",
        width: "100%",
        height: 45,
        justifyContent: "center",    
        alignItems: "center",
        borderRadius: 5,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    }
})