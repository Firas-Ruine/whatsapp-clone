import { Image, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const OptionCard = (props) => {
  OptionCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isDividerEnabled: PropTypes.bool.isRequired,
  };

  return (
    <View>
      <View style={styles.statusContainer}>
        <Image source={props.icon} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.statusText}>{props.title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="rgba(60, 60, 67, 0.29)"
          />
        </View>
      </View>
      {props.isDividerEnabled && (
        <View
          style={{
            height: 0.5,
            width: "82%",
            backgroundColor: "rgba(60, 60, 67, 0.29)",
            alignSelf: "flex-end",
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    marginTop: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
  textContainer: {
    marginLeft: 5,
    flex: 1,
  },
  statusText: {
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OptionCard;
