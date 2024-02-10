// Navigation Types
export type StackScreens = {
  Registration: undefined;
  Login: undefined;
  Home: undefined;
};

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RegistrationStackPropsType = NativeStackScreenProps<
  StackScreens,
  "Registration"
>;
export type AuthStackPropsType = NativeStackScreenProps<StackScreens, "Login">;
export type AppStackPropsType = NativeStackScreenProps<StackScreens, "Home">;

// Registration Types
export interface UserRegistration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export type UserLoginAfterRemoval = Omit<UserRegistration, keyof UserLogin>;
