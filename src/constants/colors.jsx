/**
 * This file contains the color constants used in the app.
 *
 * The colors are used in the components and screens to maintain a consistent color scheme.
 *
 * The colors are defined as an object with key-value pairs.
 *
 * The key is the name of the color and the value is the color code.
 *
 */
const tintColorLight = "#3A84C2";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
