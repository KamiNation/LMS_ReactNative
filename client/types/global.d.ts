
import { ImageSourcePropType } from "react-native"



export interface onboardingSwipingData {
    id: number
    image: ImageSourcePropType
    title?: string
    subtitle?: string
}


export interface authState {
    isLoggedIn: boolean
    isPasswordVisible: boolean
    buttonSpinner: boolean
    userInfo: {
        name: string,
        email: string,
        password: string
    }
    required: string
    error: {
        password: string
    }
    code: string[]
}

export interface button {
    title: string
    onPress: () =>  void
}
