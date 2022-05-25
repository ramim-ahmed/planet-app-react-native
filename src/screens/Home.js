import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/Text/Text";
import { PLANET_LIST } from "../data/planet-list";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Home = ({ navigation }) => {

  const [planetList, setPlanetList] = useState(PLANET_LIST);

  const searchFilter = (text) => {
    const filterValue = planetList.filter(planet => {
      const filterName = planet.name.toLowerCase();
      const inputValue = text.toLowerCase();
      return filterName.indexOf(inputValue) > -1;
    })
    setPlanetList(filterValue);
  };


  return (
    <View style={styles.homeContainer}>
      {/* header */}
      <PlanetHeader title="THE PLANETS" />
      {/* planets list */}
      {/* searchBox */}
      <TextInput 
      style={styles.searchBox} 
      placeholder="Type Your Planet Name" 
      placeholderTextColor={colors.white} 
      onChangeText={ (text) => searchFilter(text)}
       />
      <FlatList
        data={planetList}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", {planet: item});
              }}
              style={styles.itemContainer}
            >
              <View style={styles.itemRow}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text style={styles.itemText} preset="h4">
                  {name}
                </Text>
              </View>
              <AntDesign name="right" size={24} color="white" />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing[4],
  },
  itemRow: {
    flexDirection: "row",
  },
  itemText: {
    textTransform: "uppercase",
    marginLeft: spacing[5],
  },
  list: {
    padding: spacing[4],
  },
  searchBox: {
    marginVertical: spacing[8],
    marginHorizontal: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    padding: spacing[4],
    color: colors.white,
    fontSize: 18
  },
});
