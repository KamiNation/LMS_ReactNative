
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
        email: string,
        password: string
    }
}