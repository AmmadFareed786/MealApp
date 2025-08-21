import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const FavouriteMeal = () => {
  // yahan sahi state ka path likhna hai
  const favoriteMealIds = useSelector((state) => state.favoritesMeal.ids);

  // dummy data se sirf favorite meals filter karo
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  // agar koi favorite meal hi nahi hai
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite meals yet. Start adding some!</Text>
      </View>
    );
  }

  // otherwise list show karo
  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MealItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          duration={item.duration}
          complexity={item.complexity}
          affordability={item.affordability}
        />
      )}
    />
  );
};

export default FavouriteMeal;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});