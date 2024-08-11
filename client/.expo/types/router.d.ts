/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(routes)/forgot-password` | `/(routes)/login` | `/(routes)/onboarding` | `/(routes)/sign-up` | `/(routes)/verifyAccount` | `/(routes)/welcome-intro` | `/_sitemap` | `/forgot-password` | `/login` | `/onboarding` | `/sign-up` | `/verifyAccount` | `/welcome-intro`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
