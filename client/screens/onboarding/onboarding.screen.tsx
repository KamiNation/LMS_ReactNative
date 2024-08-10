import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'

// import LinearGradient from 'react-native-linear-gradient';
// import { LinearGradient } from 'expo-linear-gradient'

// Custom import
import { styles } from '@/styles/onboarding/onboardingStyles'
import { router } from 'expo-router'

export default function OnBoardingScreen() {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        // <LinearGradient colors={["#E5ECF9", "F6F7F9"]} style={styles.gradient}>
        <View style={[styles.firstContainer, styles.gradient]}>
            <View>
                <Image style={styles.logo} source={require("@/assets/images/photo.jpeg")} />
                <Image />
            </View>
            <View style={styles.titleWrapper}>
                <Image style={styles.titleWrapper1} />
                <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
                    Start Learning With
                </Text>
                <Image style={styles.titleTextShape2} />
            </View>
            <View>
                <Image style={styles.titleShape3} />
                <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
                    Kamidemy
                </Text>
            </View>
            <View style={styles.dscpWrapper}>
                <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                    Explore a variety of interactive
                </Text>
                <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                    videos, quizzes & assignment.
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonWrapper} onPress={()=> router.push('/(routes)/welcome-intro')}>
                <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
                    Getting Started
                </Text>
            </TouchableOpacity>
        </View>
        // </LinearGradient> 
    )
}