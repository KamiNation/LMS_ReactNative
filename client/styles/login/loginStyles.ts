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
    learningText:{
        textAlign: "center",
        fontSize: 15,
        marginTop: 5,
        color: "#575757"
    },
    inputContainer:{
        marginTop: 30,
        rowGap: 30,
        marginHorizontal: 16
    },
    input:{
        height: 55,
        marginHorizontal: 16,
        borderRadius: 8,
        paddingLeft: 35,
        fontSize: 16,
        backgroundColor: "white",
        color: "#A1A1A1",
        
    }
})