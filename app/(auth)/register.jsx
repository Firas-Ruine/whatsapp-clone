import React from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthService from "../../src/services/authService";

const Register = () => {
  const authentificationService = AuthService();

  /**
   * This is the validation schema for the registration form
   *
   * @param {string} name - The name of the user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @param {string} confirmPassword - The password of the user
   *
   * @returns {object} - The validation schema for the registration form
   */
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        authentificationService.register(values.email, values.password);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ImageBackground
            source={require("../../src/assets/background.png")}
            style={styles.background}
          >
            <Text style={styles.title}>Create a New Acount</Text>
            <Text style={styles.subTitle}>
              Create an account to continue using our app
            </Text>

            <View>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                returnKeyType="done"
                placeholder="Please enter your full name"
                onChangeText={handleChange("name")}
                value={values.name}
                style={styles.input}
              />
              {!!(errors.name && touched.name) && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>

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
                secureTextEntry={true}
                placeholder="Please enter your password"
                onChangeText={handleChange("password")}
                value={values.password}
                style={styles.input}
              />
              {!!(errors.password && touched.password) && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                returnKeyType="done"
                secureTextEntry={true}
                placeholder="Please enter your password again"
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                style={styles.input}
              />
              {!!(errors.confirmPassword && touched.confirmPassword) && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            <Pressable
              style={styles.signInButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.signInText}>Register now</Text>
            </Pressable>
            <View style={styles.rowContainer}>
              <Text style={styles.createAccountText}>
                Already have an account ?{" "}
              </Text>
              <Link href="(auth)/login" style={styles.createAccountLink}>
                Login now
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
    marginTop: 50,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
    marginHorizontal: 25,
  },
});

export default Register;
