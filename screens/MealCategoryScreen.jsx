import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealCategoryScreen = ({ route, navigation }) => {
  //const catID = props.navigation.getParam("categoryID");

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("Meal Details", {
            mealID: itemData.item.id,
            mealTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  const { categoryID } = route.params;

  //const selectedCategory = CATEGORIES.find((c) => c.id === categoryID);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );

  //navigation.setOptions({ title: selectedCategory.title });
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
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
