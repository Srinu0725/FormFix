import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView 
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, "Signup">;

interface SignupProps {
  navigation: SignupScreenNavigationProp;
}

const SignupScreen: React.FC<SignupProps> = ({ navigation }) => {
  const [userType, setUserType] = useState<"Athlete" | "Sponsor" | "Other" | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Athlete-specific fields
  const [sport, setSport] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  // Sponsor-specific fields
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");

  // Other user fields
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Role Selection */}
      <View style={styles.roleContainer}>
        <TouchableOpacity 
          style={[styles.roleButton, userType === "Athlete" && styles.selectedRole]} 
          onPress={() => setUserType("Athlete")}
        >
          <Text style={styles.roleText}>Athlete</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleButton, userType === "Sponsor" && styles.selectedRole]} 
          onPress={() => setUserType("Sponsor")}
        >
          <Text style={styles.roleText}>Sponsor</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleButton, userType === "Other" && styles.selectedRole]} 
          onPress={() => setUserType("Other")}
        >
          <Text style={styles.roleText}>Other</Text>
        </TouchableOpacity>
      </View>

      {/* Common Fields */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="gray"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Athlete Fields */}
      {userType === "Athlete" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Sport (e.g., Football, Basketball)"
            placeholderTextColor="gray"
            value={sport}
            onChangeText={setSport}
          />

          <TextInput
            style={styles.input}
            placeholder="Years of Experience"
            placeholderTextColor="gray"
            keyboardType="numeric"
            value={experience}
            onChangeText={setExperience}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Short Bio"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            value={bio}
            onChangeText={setBio}
          />
        </>
      )}

      {/* Sponsor Fields */}
      {userType === "Sponsor" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            placeholderTextColor="gray"
            value={company}
            onChangeText={setCompany}
          />

          <TextInput
            style={styles.input}
            placeholder="Sponsorship Budget ($)"
            placeholderTextColor="gray"
            keyboardType="numeric"
            value={budget}
            onChangeText={setBudget}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Athlete Interests (e.g., Football players, Runners)"
            placeholderTextColor="gray"
            multiline
            numberOfLines={3}
            value={interests}
            onChangeText={setInterests}
          />
        </>
      )}

      {/* Other Fields */}
      {userType === "Other" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Your Role (e.g., Coach, Physiotherapist, Journalist)"
            placeholderTextColor="gray"
            value={role}
            onChangeText={setRole}
          />

          <TextInput
            style={styles.input}
            placeholder="Organization (if any)"
            placeholderTextColor="gray"
            value={organization}
            onChangeText={setOrganization}
          />
        </>
      )}

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.backToLogin}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  roleButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: "#008F6A",
  },
  roleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "white",
    color: "black",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  signupButton: {
    backgroundColor: "#008F6A",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  signupText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backToLogin: {
    color: "#6A008F",
    fontSize: 14,
    marginTop: 10,
  },
});

export default SignupScreen;
