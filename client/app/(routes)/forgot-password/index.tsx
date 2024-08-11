import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import {
    useFonts,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold
} from '@expo-google-fonts/nunito'
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyles } from '@/styles/login/loginStyles';
import { verify } from '@/styles/verify/verifyStyles';
import { forget } from '@/styles/forget/forgetStyles';
import { router } from 'expo-router';


export default function ForgotPassword() {


    let [fontsLoaded, fontsError] = useFonts({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontsLoaded && !fontsError) {
        return null;
    }


    return (
        <SafeAreaView
            style={forget.container}
        >
            <Text
                style={[forget.headerText]}
            >
                Reset Email Password
            </Text>
            <TextInput
                style={[forget.input, { fontFamily: "Nunito_400Regular" }]}
                placeholder='Username@gmail.com'
                keyboardType='email-address'
            />
            <TouchableOpacity
                style={forget.button}
            >
                <Text
                    style={[forget.backText, { fontFamily: "Nunito_400Regular" }]}
                >
                    Send
                </Text>
            </TouchableOpacity>
            <View
                style={forget.loginLink}
            >
                <Text
                    style={[forget.backText,]}
                >
                    Back To?
                </Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                >
                    <Text
                        style={[forget.loginText]}
                    >
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}