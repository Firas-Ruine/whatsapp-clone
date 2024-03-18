import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StarredMessages = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={50} style={styles.starIcon} />
      <Text style={styles.noStarredMessages}>No Starred Messages</Text>
      <Text style={styles.infoText}>
        Tap and hold on a message to star it, so you can easily find it later
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    color: "rgba(60, 60, 67, 0.3)",
  },
  noStarredMessages: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
    color: "rgba(60, 60, 67, 0.6)",
    textAlign: "center",
    maxWidth: "85%",
  },
});

export default StarredMessages;
