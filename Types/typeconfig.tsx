// Navigation Types
export type StackScreens = {
  Registration: undefined;
  Login: undefined;
  Home: undefined;
  AddTransaction: undefined;
  Settings: undefined;
};

import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RegistrationStackPropsType = NativeStackScreenProps<
  StackScreens,
  "Registration"
>;
export type AuthStackPropsType = NativeStackScreenProps<StackScreens, "Login">;
export type AppStackPropsType = NativeStackScreenProps<StackScreens, "Home">;

export type NewChargePropsType = NativeStackScreenProps<
  StackScreens,
  "AddTransaction"
>;
export type SettingsPropsType = NativeStackScreenProps<
  StackScreens,
  "Settings"
>;

// Registration Types
export interface NewRegistration {
  username: string;
  email: string;
  password: string;
}
export interface LoginNeeds {
  username: string;
}
export interface RegiterSensitives {
  password: string;
}
export type RegisteredUser = Omit<NewRegistration, keyof RegiterSensitives>;

export type UserLogin = Omit<NewRegistration, keyof LoginNeeds>;

//Transaction types

export interface Transactions {
  id: number;
  cost: string;
  posNeg: string;
  date: string;
  description: string;
}

export type IncomeOrCharge = {
  key: string;
  value: string;
}[];

// Update password
export interface PasswordUpdate {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  updatePassword: string;
}
