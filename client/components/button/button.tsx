import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { button } from '@/types/global'
import { commonStyles } from '@/styles/common/common.styles'


const Button: React.FC<button> = ({ title, onPress }) => {

    const { width } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={[commonStyles.buttonContainer, {
                height: 40,
                width: width * 1 - 200,
                alignItems: "center", 
                flexDirection: "row", 
                justifyContent: "center"
            }]}
            onPress={() => onPress()}
        >
            <Text
                style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button