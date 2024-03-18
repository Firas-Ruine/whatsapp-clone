import React from "react";
import UserCard from "../../src/components/settings/userCard";
import OptionCard from "../../src/components/settings/optionCard";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <ScrollView>
      <UserCard />
      <View style={styles.sectionContainer} />
      <View style={styles.sectionDivider} />
      <Link href="/(settings)/starredMessages">
        <OptionCard
          icon={require("../../src/assets/settings/starredIcon.png")}
          title={"Starred Messages"}
          isDividerEnabled={true}
        />
      </Link>
      <Link href="/(settings)/desktop">
        <OptionCard
          icon={require("../../src/assets/settings/web-desktop.png")}
          title={"WhatsApp Web/Desktop"}
          isDividerEnabled={true}
        />
      </Link>
      <View style={styles.sectionDivider} />
      <Link href="/(auth)/login">
        <OptionCard
          icon={require("../../src/assets/settings/account.png")}
          title={"Account"}
          isDividerEnabled={true}
        />
      </Link>
      <OptionCard
        icon={require("../../src/assets/settings/chats.png")}
        title={"Chats"}
        isDividerEnabled={true}
      />
      <OptionCard
        icon={require("../../src/assets/settings/notifications.png")}
        title={"Notifications"}
        isDividerEnabled={true}
      />
      <OptionCard
        icon={require("../../src/assets/settings/data-storage.png")}
        title={"Data and Storage Usage"}
        isDividerEnabled={true}
      />
      <View style={styles.sectionDivider} />
      <OptionCard
        icon={require("../../src/assets/settings/help.png")}
        title={"Help"}
        isDividerEnabled={true}
      />
      <OptionCard
        icon={require("../../src/assets/settings/friend.png")}
        title={"Tell a Friend"}
        isDividerEnabled={true}
      />
      <Text style={styles.footerText}>WhatsApp from Meta</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionDivider: {
    // borderTopWidth: 0.8,
    // borderBottomWidth: 0.8,
    // borderTopColor: "rgba(60, 60, 67, 0.29)",
    // borderBottomColor: "rgba(60, 60, 67, 0.29)",
    marginTop: 30,
  },
  sectionContainer: {
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#8E8E93",
    margin: 60,
    textAlign: "center",
  },
});

export default Settings;
