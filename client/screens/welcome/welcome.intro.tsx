import React from 'react'
import {
    Nunito_400Regular,
    Nunito_600SemiBold
}
    from '@expo-google-fonts/nunito'

import { Raleway_700Bold } from '@expo-google-fonts/raleway'

import { View, Text, Image, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import { onboardingSwipingData } from '@/types/global'
import { LinearGradient } from 'expo-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider'
import { OnboardingSwipingData } from '@/constants/constants'
import { router } from 'expo-router'
import { commonStyles } from '@/styles/common/common.styles'
import { styles } from '@/styles/onboarding/onboardingStyles'


const WelcomeIntroScreen = () => {

    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_600SemiBold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const renderItem = ({ item }: { item: onboardingSwipingData }) => (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", paddingHorizontal: 16 }}
        >
            <View style={{ marginTop: 80 }}>
                <Image
                    source={item.image}
                    style={styles.slideImages}
                />
                <View>
                    <Text style={[{fontFamily: "Raleway_700Bold"}, commonStyles.title]}>
                        {item.title}
                    </Text>
                    <Text style={[{fontFamily: "Nunito_400Regular"}, commonStyles.description]}>
                        {item.subtitle}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )


    return (
        <AppIntroSlider
            renderItem={renderItem}
            data={OnboardingSwipingData}
            onDone={() => { router.push('/login') }}
            onSkip={() => { router.push('/login') }}
            renderNextButton={() => (
                <View style={styles.welcomeButtonNext}>
                    <Text style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}>
                        Next
                    </Text>
                </View>
            )}
            renderDoneButton={() => (
                <View style={commonStyles.buttonContainer}>
                    <Text style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}>
                        Done
                    </Text>
                </View>
            )}
            showSkipButton={false}
            dotStyle={commonStyles.dotStyle}
            bottomButton={true}
            activeDotStyle={commonStyles.activeDotStyles}
        />
    )
}

export default WelcomeIntroScreen