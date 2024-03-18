import { View } from "react-native";
import StatusCard from "../../src/components/status/statusCard";
import UpdatesCard from "../../src/components/status/updatesCard";

export default function Page() {
  return (
    <View>
      <StatusCard />
      <UpdatesCard />
    </View>
  );
}
