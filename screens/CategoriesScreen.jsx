import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

export default function CategoriesScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTitle
          title={item.title}
          color={item.color}
          onPress={() => navigation.navigate('MealsOverview', {categoryId: item.id})}
        />
      )}
    />
  );
}
