import React, { useLayoutEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import IngredientDetails from '../components/IngredientDetails';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetails({ route, navigation }) {
  const favoritemealIds = useSelector((state) => state.favoritesMeal.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoritemealIds.includes(mealId);

  const changeFavoriteStatusHandler = useCallback(() => {
    console.log('🌟 TOGGLE FUNCTION CALLED!');
    console.log('Current state - mealIsFavorite:', mealIsFavorite);
    
    if (mealIsFavorite) {
      console.log('Dispatching REMOVE');
      dispatch(removeFavorite({ id: mealId }));
    } else {
      console.log('Dispatching ADD');
      dispatch(addFavorite({ id: mealId }));
    }
  }, [mealIsFavorite, mealId, dispatch]);

  useLayoutEffect(() => {
    console.log('🔄 useLayoutEffect running...');
    console.log('mealIsFavorite:', mealIsFavorite);
    
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color={mealIsFavorite ? "#FFD700" : "white"}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <IngredientDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      {/* Ingredients */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <View key={ingredient} style={styles.ingredientItem}>
          <Text style={styles.ingredientText}>• {ingredient}</Text>
        </View>
      ))}

      {/* Steps */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step, index) => (
        <View key={step} style={styles.stepItem}>
          <Text style={styles.stepNumber}>Step {index + 1}:</Text>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default React.memo(MealDetails);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f2f25',
  },
  scrollContent: {
    paddingBottom: 35,
  },
  image: {
    marginTop: 10,
    width: '95%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 3,
    borderBottomColor: '#fcaf7e',
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
    color: '#fcaf7e',
  },
  ingredientItem: {
    backgroundColor: '#5a4034',
    marginHorizontal: 20,
    marginVertical: 4,
    padding: 8,
    borderRadius: 6,
  },
  ingredientText: {
    color: 'white',
    fontSize: 16,
  },
  stepItem: {
    backgroundColor: '#6d4f42',
    marginHorizontal: 20,
    marginVertical: 6,
    padding: 10,
    borderRadius: 6,
  },
  stepNumber: {
    color: '#fcaf7e',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
  },
});