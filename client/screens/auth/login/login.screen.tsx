import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'


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
import { setUserInfo } from '@/store/authSlice'

export default function LoginScreen() {


    const userInfo = useSelector((state: RootState) => state.authentication.userInfo) || { email: '', password: '' };

    useEffect(() => {
        console.log("UserInfo =>", userInfo);
    }, [userInfo])


    const dispatch = useDispatch()


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
                            placeholder='support@kamidemy.com'
                            onChangeText={(value) => dispatch(setUserInfo({ ...userInfo, email: value }))}
                        />
                    </View>
                </View>
                <View>
                    <Text>
                        Email: {userInfo.email}
                    </Text>
                    <Text>
                        Pass: {userInfo.password}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}