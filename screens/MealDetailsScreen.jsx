import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealID } = route.params;

  const selectedMeal = MEALS.find((m) => m.id === mealID);

  return (
    <View style={styles.screen}>
      <Text>The Meal Details for {selectedMeal.title}</Text>
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

export default MealDetailsScreen;
