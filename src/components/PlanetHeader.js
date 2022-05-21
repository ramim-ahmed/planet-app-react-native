import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./Text/Text";
export default function PlanetHeader({ title, backBtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
          backBtn && (
            <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Entypo name="chevron-left" size={40} color="white" />
          </TouchableOpacity>
          )
      }
      <Text style={styles.headerText} preset="h2">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
    flexDirection: "row",
  },
  backButton: {
    marginRight: 20,
  },
});
