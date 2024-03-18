import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function TabLayout() {
  /**
   * This is the TabBarIcon component that is used to render the icons in the tab bar.
   *
   * @param {object} props - The props of the component.
   *
   * @param {string} props.name - The name of the icon.
   *
   * @param {string} props.color - The color of the icon.
   *
   * @returns {React.ReactNode} The TabBarIcon component.
   */
  function TabBarIcon({ name, color }) {
    return <Ionicons name={name} size={30} color={color} />;
  }
  TabBarIcon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#737373",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cloud-circle" : "cloud-circle-outline"}
              color={color}
            />
          ),
          headerShown: true,
          tabBarLabel: "Updates",
          title: "",
          headerStyle: { backgroundColor: "#F6F6F6" },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: "bold" }}>
                  Updates
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "call" : "call-outline"}
              color={color}
            />
          ),
          tabBarLabel: "Calls",
          title: "",
          headerStyle: { backgroundColor: "#F6F6F6" },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: "bold" }}>Calls</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
          title: "Communities",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              color={color}
            />
          ),
          tabBarLabel: "Chats",
          title: "",
          headerStyle: { backgroundColor: "#F6F6F6" },
          tabBarBadge: 5,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: "bold" }}>Chats</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "cog" : "cog-outline"} color={color} />
          ),
          tabBarLabel: "Settings",
          title: "",
          headerStyle: { backgroundColor: "#F6F6F6" },
          tabBarBadge: 1,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: "bold" }}>
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
