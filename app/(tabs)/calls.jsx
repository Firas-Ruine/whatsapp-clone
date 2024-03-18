import { FlatList } from "react-native";
import React from "react";
import CallsHistoryCard from "../../src/components/calls/callsHistoryCard";
import dummyData from "../../src/utils/dummy-data";

const Calls = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <CallsHistoryCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Calls;
