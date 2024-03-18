import { Image, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const UserCard = () => {
  return (
    <View>
      <View style={styles.statusContainer}>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.statusText}>Firas Ruine</Text>
          <Text style={styles.addToStatus}>Hey there! I am using WhatsApp</Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <SimpleLineIcons
              name="arrow-right"
              size={18}
              color="rgba(60, 60, 67, 0.29)"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  textContainer: {
    marginLeft: 5,
  },
  statusText: {
    fontSize: 22,
    fontWeight: "700",
  },
  addToStatus: {
    marginTop: 5,
    fontSize: 14,
    color: "#8E8E93",
  },
  iconsContainer: {
    flexDirection: "row",
    left: 55,
  },
  icon: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserCard;
