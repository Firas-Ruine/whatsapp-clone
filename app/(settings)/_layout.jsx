import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsLayout() {
  /**
   * This function is used to navigate to the previous screen.
   *
   * @returns {void} The result of this function.
   */
  const navigateToPreviousScreen = () => {
    router.back();
  };

  /**
   * This function is used to render the header left component.
   *
   * @returns {React.ReactNode}
   *
   * @example
   * return headerLeft();
   */
  const headerLeftRender = () => {
    return (
      <Ionicons
        name="chevron-back-outline"
        size={26}
        color="#007AFF"
        onPress={navigateToPreviousScreen}
      />
    );
  };

  return (
    <Stack>
      <Stack.Screen
        name="starredMessages"
        options={{
          title: "Starred Messages",
          headerLeft: headerLeftRender,
        }}
      />
      <Stack.Screen
        name="desktop"
        options={{
          title: "Linked Devices",
          headerStyle: { backgroundColor: "#F6F6F6" },
          headerLeft: headerLeftRender,
        }}
      />
      <Stack.Screen
        name="account"
        options={{
          title: "Account",
          headerStyle: { backgroundColor: "#F6F6F6" },
          headerLeft: headerLeftRender,
        }}
      />
    </Stack>
  );
}
