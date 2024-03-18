import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as SecureStore from "expo-secure-store";

/**
 * This service is used to handle all authentication related operations
 *
 * @returns {object} The result of this function
 */
const AuthService = () => {
  /**
   * This function is used to sign in a user
   *
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   *
   * @returns {void} The result of this function
   */
  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Save the user's email and token in the secure store
        SecureStore.setItemAsync("email", user.email);
        SecureStore.setItemAsync("token", user.stsTokenManager.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  /**
   * This function is used to register a new user
   *
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   *
   * @returns {void} The result of this function
   */
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Account created successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return {
    signIn,
    register,
  };
};
export default AuthService;
