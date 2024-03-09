import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "../Styles/LightStyles";

export default function UserSettings() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
    currentPassword: "",
    newEmail: "",
  });

  const handleChangePassword = () => {
    // write the logic to change password
  };

  const handleChangeEmail = () => {
    // write the logic to change email
  };

  const handleDeleteAccount = () => {
    // write the logic to delete account
  };

  const handleLogout = () => {
    // write the logic to logout
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(newPassword) =>
              setForm((prevState) => ({ ...prevState, newPassword }))
            }
            placeholder="New Password"
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(confirmPassword) =>
              setForm((prevState) => ({ ...prevState, confirmPassword }))
            }
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(currentPassword) =>
              setForm((prevState) => ({ ...prevState, currentPassword }))
            }
            placeholder="Current Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Change Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(newEmail) =>
              setForm((prevState) => ({ ...prevState, newEmail }))
            }
            placeholder="New Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(currentPassword) =>
              setForm((prevState) => ({ ...prevState, currentPassword }))
            }
            placeholder="Current Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleChangeEmail}>
          <Text style={styles.buttonText}>Change Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={styles.buttonblue}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.buttonred} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
