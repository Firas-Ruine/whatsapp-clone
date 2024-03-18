import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const Desktop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../src/assets/settings/linked-devices.jpeg")}
          style={styles.image}
        />
        <Text style={styles.cardText}>
          Use WhatsApp on web, Desktop, and other devices.{" "}
          <Text style={{ color: "#007AFF" }}>Learn more</Text>
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Link a device</Text>
        </Pressable>
      </View>
      <Text style={styles.sectionTitle}>LINKED DEVICES</Text>
      <View style={styles.deviceContainer}>
        <View style={styles.deviceItem}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
            }}
            style={styles.deviceImage}
          />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>Google Chrome (Windows)</Text>
            <Text style={styles.lastActive}>
              Last active yesterday at 00:37
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.deviceItem}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
            }}
            style={styles.deviceImage}
          />
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>Google Chrome (Linux)</Text>
            <Text style={styles.lastActive}>
              Last active yesterday at 00:37
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.logoutText}>Tap a device to log out.</Text>
      <Text style={styles.encryptedText}>
        Your personal messages and data are{" "}
        <Text style={{ color: "#007AFF" }}> end-to-end encrypted </Text> on all
        of your devices.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: "37%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "70%",
    height: "55%",
  },
  cardText: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    maxWidth: "70%",
    color: "rgba(60, 60, 67, 0.6)",
  },
  button: {
    width: "95%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 13,
    marginTop: 40,
    marginLeft: 40,
    color: "rgba(60, 60, 67, 0.6)",
  },
  deviceContainer: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: "15%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 10,
  },
  deviceItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  deviceImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  deviceInfo: {
    marginRight: 5,
  },
  deviceName: {
    fontSize: 16,
  },
  lastActive: {
    marginTop: 5,
    fontSize: 14,
    color: "#8E8E93",
  },
  separator: {
    height: 0.5,
    width: "82%",
    backgroundColor: "rgba(60, 60, 67, 0.15)",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  logoutText: {
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    color: "rgba(60, 60, 67, 0.6)",
    marginLeft: 40,
  },
  encryptedText: {
    fontSize: 11,
    marginTop: 30,
    maxWidth: "90%",
    color: "rgba(60, 60, 67, 0.6)",
    marginLeft: 25,
    textAlign: "center",
  },
});

export default Desktop;
