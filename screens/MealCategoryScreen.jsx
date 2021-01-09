import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const MealCategoryScreen = ({ route, navigation }) => {
  //const catID = props.navigation.getParam("categoryID");

  const { categoryID } = route.params;

  const selectedCategory = CATEGORIES.find((c) => c.id === categoryID);
  navigation.setOptions({ title: selectedCategory.title });
  return (
    <View style={styles.screen}>
      <Text>The Meal Category Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealCategoryScreen;
