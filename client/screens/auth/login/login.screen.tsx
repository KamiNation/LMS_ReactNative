import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'


import {
    Fontisto,
    SimpleLineIcons,
    Ionicons,
    Entypo,
    FontAwesome
} from '@expo/vector-icons'

import {
    useFonts,
    Raleway_700Bold,
    Raleway_600SemiBold,
    Raleway_600SemiBold_Italic,
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
import { setButtonSpinner, setError, setIsPasswordVisible, setUserInfo } from '@/store/authSlice'
import { commonStyles } from '@/styles/common/common.styles'
import { router } from 'expo-router'


export default function LoginScreen() {


    const userInfo = useSelector((state: RootState) => state.authentication.userInfo) || { email: '', password: '' };

    const required = useSelector((state: RootState) => state.authentication.required)

    const isPasswordVisible = useSelector((state: RootState) => state.authentication.isPasswordVisible)

    const error = useSelector((state: RootState) => state.authentication.error)

    const buttonSpinner = useSelector((state: RootState) => state.authentication.buttonSpinner)

    useEffect(() => {
        console.log("(Oga o) =>", userInfo);
    }, [userInfo])


    const dispatch = useDispatch()

    let [fontsLoaded, fontsError] = useFonts({
        Raleway_700Bold,
        Raleway_600SemiBold,
        Raleway_600SemiBold_Italic,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontsLoaded && !fontsError) {
        return null;
    }

    const handlePasswordValidation = (value: string) => {

        // Get the value from the user with the 
        // handlePasswordValidation as a parameterized function
        // and then store that value in a var password

        const password = value;
        // Create a var to hold special char
        const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
        // Create a var to hold no 0-9
        const passwordOneNumber = /(?=.*[0-9])/;
        // Create a var to check if password is equal to 6 or more than
        const passwordSixValue = /(?=.{6,})/

        if (password.trim() === "") {
            dispatch(setError({
                ...error,
                password: ""
            }));
            return;
        }


        // Use the if statement and test method to check that the password as a special character, a number and is of 6 characters in it as the test method returns a boolean value
        // And then if the test method return false then manage it with a setError state management to tell the user all the requirement needed
        if (!passwordSpecialCharacter.test(password)) {
            dispatch(setError({
                ...error,
                password: "Write at least one speical character"
            }));
            dispatch(setUserInfo({
                ...userInfo, password: ""
            }))
        } else if (!passwordOneNumber.test(password)) {
            dispatch(setError({
                ...error,
                password: "Write at least one number"
            }));
            dispatch(setUserInfo({
                ...userInfo, password: ""
            }))
        } else if (!passwordSixValue.test(password)) {
            dispatch(setError({
                ...error,
                password: "Write at least 6 characters"
            }));
            dispatch(setUserInfo({
                ...userInfo, password: ""
            }))
            // and then finally if the password passes all the requirement accept the password 
        } else {
            dispatch(setError({
                ...error,
                password: ""
            }));
            dispatch(setUserInfo({
                ...userInfo, password: value
            }))
        }
    }


    const handleSignIn = () => {

    }


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
                                    paddingLeft: 40
                                }]}
                            keyboardType='email-address'
                            value={userInfo.email}
                            placeholder='support@kamidemy.com'
                            onChangeText={(value) => dispatch(setUserInfo({ ...userInfo, email: value }))}

                        />
                        <Fontisto
                            style={
                                {
                                    position: "absolute",
                                    left: 26,
                                    top: 17.8,
                                }}
                            name="email"
                            size={20}
                            color={"#A1A1A1"}
                        />
                        {
                            required && (
                                <View
                                    style={commonStyles.errorContainer}
                                >
                                    <Entypo name='cross' size={18} color={"blue"} />
                                </View>
                            )
                        }
                        <View style={{ marginTop: 15 }}>
                            <TextInput
                                style={commonStyles.input}
                                keyboardType='default'
                                secureTextEntry={!isPasswordVisible}
                                placeholder='********'
                                onChangeText={handlePasswordValidation}

                            />
                            <TouchableOpacity
                                style={loginStyles.visibleIcons}
                                onPress={() => dispatch(setIsPasswordVisible(!isPasswordVisible))}
                            >
                                {
                                    isPasswordVisible ? (
                                        <Ionicons
                                            name='eye-off-outline'
                                            size={23}
                                            color={"#747474"}
                                        />
                                    ) : (
                                        <Ionicons
                                            name='eye-outline'
                                            size={23}
                                            color={"#747474"}
                                        />
                                    )
                                }

                            </TouchableOpacity>
                            <SimpleLineIcons
                                style={loginStyles.icon2}
                                name='lock'
                                size={20}
                                color={"#A1A1A1"}
                            />
                        </View>
                        {
                            error.password && error.password.trim() !== "" ? (
                                <View style={[
                                    commonStyles.errorContainer, {
                                        top: 145
                                    }
                                ]}>
                                    <Entypo
                                        name='cross'
                                        size={18}
                                        color={"red"}
                                    />
                                    <Text
                                        style={{
                                            color: "red",
                                            fontSize: 11,
                                            marginTop: -1
                                        }}
                                    >
                                        {
                                            error.password
                                        }
                                    </Text>
                                </View>
                            ) : null
                        }
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push("/(routes)/forgot-password")}
                    >
                        <Text
                            style={[
                                loginStyles.forgotSection, { fontFamily: "Nunito_600SemiBold" }
                            ]
                            }
                        >
                            Forgot Password
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            padding: 16,
                            borderRadius: 8,
                            marginHorizontal: 16,
                            backgroundColor: "green",
                            marginTop: 20
                        }}
                        onPress={handleSignIn}
                    >
                        {
                            buttonSpinner ? (
                                <ActivityIndicator size="small" color={"white"} />
                            ) : (
                                <Text
                                    style={{
                                        color: "white",
                                        textAlign: "center",
                                        fontSize: 16,
                                        fontFamily: "Raleway_700Bold"
                                    }
                                    }
                                >
                                    SignIn
                                </Text>
                            )
                        }
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: "row", alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                            gap: 10
                        }}
                    >
                        <TouchableOpacity>
                            <FontAwesome
                                name='google'
                                size={24}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome
                                name='github'
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={loginStyles.signupRedirect}
                    >
                        <Text style={{
                            fontSize: 18,
                            fontFamily: "Raleway_600SemiBold_Italic"
                        }}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.push("/(routes)/sign-up")}
                        >
                            <Text
                                style={{
                                    fontSize: 18, fontFamily: "Raleway_600SemiBold", color: "#2467EC",
                                    marginLeft: 5
                                }}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}