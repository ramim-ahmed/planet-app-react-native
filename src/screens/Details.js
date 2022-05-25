import React from "react";
import { Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";
import PlanetHeader from "../components/PlanetHeader";
import PlanetSection from "../components/PlanetSection";
import Text from "../components/Text/Text";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg
} from "../svg";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ route }) {
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = route.params.planet;
  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "mars":
        return <MarsSvg />;
    }
  };
  const sourceLink = (wikiLink) => {
   Linking.openURL(wikiLink)
  };
  return (
    <View style={styles.detailsContainer}>
      <PlanetHeader title="THE PLANETS" backBtn />
      <ScrollView>
        <View style={styles.planetImage}>{renderImage(name)}</View>
        <View style={styles.planetDetails}>
          <Text style={styles.name} preset="h1">
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={() => sourceLink(wikiLink)} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 40 }} />
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP" value={avgTemp} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },

  planetImage: {
    marginTop: spacing[8],
    justifyContent: "center",
    alignItems: "center",
  },

  planetDetails: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
    textAlign: "center",
  },
  name: {
    textTransform: "uppercase",
  },
  description: {
    textAlign: "center",
    lineHeight: 21,
    marginTop: spacing[4],
  },
  source: {
    flexDirection: "row",
    marginTop: spacing[5],
    alignItems: "center",
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: spacing[2],
    letterSpacing: 1,
  },
});
