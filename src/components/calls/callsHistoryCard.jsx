import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const CallsHistoryCard = ({ item }) => {
  CallsHistoryCard.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <View style={styles.statusContainer}>
      <View style={styles.imageAndTextContainer}>
        <Image source={{ uri: item.photo }} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.statusText,
              { color: item.isMissed ? "#FF3B30" : "#000000" },
            ]}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="call" size={15} color="#8E8E93" />
            <Text style={styles.addToStatus}> {item.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <Text style={styles.callDate}>{item.date}</Text>
        <Ionicons name="information-circle-outline" size={30} color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(60, 60, 67, 0.29)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  textContainer: {
    marginRight: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "700",
  },
  addToStatus: {
    marginTop: 5,
    fontSize: 14,
    color: "#8E8E93",
  },
  callDate: {
    fontSize: 14,
    color: "#8E8E93",
    right: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 15,
  },
  icon: {
    width: 36,
    height: 36,
    backgroundColor: "#EDEDFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CallsHistoryCard;
