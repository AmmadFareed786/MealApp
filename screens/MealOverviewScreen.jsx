import { View, FlatList } from 'react-native';
import React, { use, useLayoutEffect } from 'react';
import { MEALS,     CATEGORIES   } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';

const MealOverviewScreen = ({ route, navigation }) => {
  
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(() =>{
    const catergoryTitle = CATEGORIES.find((category) => category.id === catId ).title

  navigation.setOptions({
    title: catergoryTitle,

  })
  }, [catId, navigation]); ;

  

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
          };
          return <MealItem {...mealItemProps}  />;
        }}
      />
    </View>
  );
};

export default MealOverviewScreen;
