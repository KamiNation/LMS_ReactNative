import { StyleSheet } from "react-native";




export const verify = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "white"
    },
    headerText:{
        fontSize:22,
        fontWeight: "bold",
        marginBottom: 10
    },
    subText:{
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center"
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    inputBox: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: "green",
        textAlign: "center",
        marginHorizontal: 5,
        borderRadius: 10,
        fontSize: 20
    }
})