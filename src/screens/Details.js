import React from "react";
import { StyleSheet, View } from "react-native";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/Text/Text";
import { colors } from "../theme/colors";

export default function Details({route}) {
  return (
    <View style={styles.detailsContainer}>
      <PlanetHeader title="THE PLANETS" backBtn />
      <Text preset="h2">{route.params.planet.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
