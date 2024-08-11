import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/configureStore'
import { setCode } from '@/store/authSlice'
import { verify } from '@/styles/verify/verifyStyles'
import Button from '@/components/button/button'
import { router } from 'expo-router'
import { forget } from '@/styles/forget/forgetStyles'

export default function VerifyAccountScreen() {


    const code = useSelector((state: RootState) => state.authentication.code);

    useEffect(() => {
        console.log("Code Array from Slice =>", code);
    }, [code])

    const dispatch = useDispatch()


    // This line creates a useRef hook to manage references to each of the 4 input fields.
    // useRef is initialized with an array of 4 elements, each being a reference created by React.createRef().
    // These references will be used to programmatically focus on the next or previous input field as the user types.
    const inputs = useRef<Array<React.RefObject<TextInput>>>(Array.from({ length: 4 }, () => React.createRef<TextInput>()));

    // This is a function that handles input events for each of the 4 input fields.
    const handleInput = (text: any, index: any) => {

        // A copy of the current code array is made using the spread operator.
        const newCode = [...code];

        // The value at the specified index in this array is updated with the text entered by the user.
        newCode[index] = text;
        dispatch(setCode(newCode))

        // If the user types something into an input (i.e., text is truthy), and the current input is not the last one (index < 3), the focus will automatically move to the next input field.
        if (text && index < 3) {
            // This is done by accessing the inputs array at the next index and calling focus() on the referenced input field.
            inputs.current[index + 1].current?.focus();
        }

        // If the user deletes the content of an input field (i.e., text is an empty string), and the current input is not the first one (index > 0), the focus will move back to the previous input field.
        if (text === "" && index > 0) {
            inputs.current[index - 1].current?.focus();
        }
    }

    const handleSubmit = () => {

    }

    return (
        <View
            style={verify.container}
        >
            <Text
                style={verify.headerText}
            >
                Verification Code
            </Text>
            <Text
                style={verify.subText}
            >
                We have sent the verification code to your email
            </Text>
            <View
                style={verify.inputContainer}
            >
                {
                    code && code.map((_, index) => (
                        <TextInput key={index}
                            style={verify.inputBox}
                            keyboardType='number-pad'
                            maxLength={1}
                            onChangeText={(text) => handleInput(text, index)}
                            value={code[index]}
                            ref={inputs.current[index]}
                            autoFocus={index === 0}
                        />
                    ))
                }
            </View>
            <View
            style={{marginTop: 10}}
            >
                <Button
                    title='Submit'
                    onPress={handleSubmit}
                />
            </View>
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
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}