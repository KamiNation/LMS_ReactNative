import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { UseDispatch, useSelector } from 'react-redux'


import {
    Fontisto,
    SimpleLineIcons,
    Ionicons,
    Entypo
} from '@expo/vector-icons'

import {
    useFonts,
    Raleway_700Bold,
    Raleway_600SemiBold,
} from '@expo-google-fonts/raleway'


import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold
} from '@expo-google-fonts/nunito'
import { SafeAreaView } from 'react-native-safe-area-context'
import { loginStyles } from '@/styles/login/loginStyles'
import { RootState } from '@/store/configureStore'

export default function LoginScreen() {

    const userInfo = useSelector((state: RootState) => state.authentication.userInfo)

    useEffect(()=> {
        console.log(userInfo.email);
    },[])


    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={loginStyles.signInImage}
                    source={require('@/assets/images/photo.jpeg')}
                />
                <Text
                    style={[loginStyles.welcomeText,
                    {
                        fontFamily: "Raleway_700Bold"
                    }
                    ]}
                >
                    Welcome Back!
                </Text>
                <Text
                    style={loginStyles.learningText}
                >
                    Login to your existing account of kamidemy
                </Text>
                <View style={loginStyles.inputContainer}>
                    <View>
                        <TextInput
                            style={[
                                loginStyles.input
                                ,
                                {
                                    paddingLeft: 35
                                }]}
                            keyboardType='email-address'
                            value={userInfo.email}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}