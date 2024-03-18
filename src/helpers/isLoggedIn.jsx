import * as SecureStore from "expo-secure-store";

/**
 * This function checks whether the user is logged in.
 * 
 * @async @function isLoggedIn
 * 
 * @requires expo-secure-store
 * 
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the user is logged in.
 
 */
export const isLoggedIn = async () => {
  try {
    const userToken = SecureStore.getItem("userToken");
    return userToken !== null;
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
};
