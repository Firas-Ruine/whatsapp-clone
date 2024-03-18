import React from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import * as SecureStore from "expo-secure-store";
import AuthService from "../../src/services/authService";

const Login = () => {
  const authentificationService = AuthService();

  /**
   * This is the validation schema for the login form
   *
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   *
   * @returns {object} - The validation schema for the login form
   */
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        authentificationService.signIn(values.email, values.password)
      }
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ImageBackground
            source={require("../../src/assets/background.png")}
            style={styles.background}
          >
            <Image
              source={require("../../src/assets/logo.svg")}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome Back 👋</Text>
            <Text style={styles.subTitle}>
              Please enter your credentials to continue
            </Text>

            <View>
              <Text style={styles.label}>Email</Text>

              <TextInput
                returnKeyType="done"
                keyboardType="email-address"
                placeholder="Please enter your email address"
                onChangeText={handleChange("email")}
                value={values.email}
                style={styles.input}
              />
              {!!(errors.email && touched.email) && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                returnKeyType="done"
                secureTextEntry
                placeholder="Please enter your password"
                onChangeText={handleChange("password")}
                value={values.password}
                style={styles.input}
              />
              {!!(errors.password && touched.password) && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <Pressable style={styles.signInButton}>
              <Text style={styles.signInText} onPress={() => handleSubmit()}>
                Sign In
              </Text>
            </Pressable>
            <View style={styles.rowContainer}>
              <Text style={styles.createAccountText}>Not a member ? </Text>
              <Link href="(auth)/register" style={styles.createAccountLink}>
                Register
              </Link>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: "25%",
    height: "12%",
    alignSelf: "center",
    marginTop: 120,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  label: {
    color: "black",
    fontSize: 20,
    textAlign: "left",
    marginTop: 20,
    marginHorizontal: 25,
  },
  input: {
    backgroundColor: "rgb(249 249 249)",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20,
    height: 60,
    fontSize: 20,
  },
  signInButton: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 20,
  },
  signInText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  forgotPassword: {
    color: "black",
    fontSize: 16,
    textAlign: "right",
    marginTop: 10,
    marginHorizontal: 25,
  },
  createAccountText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  createAccountLink: {
    color: "#00a884",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Login;
