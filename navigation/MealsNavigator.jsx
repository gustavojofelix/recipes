import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from "../constants/Colors";

const MealsNavigator = (props) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen
          name="Meal Category"
          component={MealCategoryScreen}
          options={({ route }) => ({ title: route.params.productTitle })}
        />
        <Stack.Screen
          name="Meal Details"
          component={MealDetailsScreen}
          options={({ route }) => ({ title: route.params.productTitle })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*
{
  Categories: CategoriesScreen,
  MealCategory: MealCategoryScreen,
  MealDetails: MealDetailsScreen,
}*/

export default MealsNavigator;
