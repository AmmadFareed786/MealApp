import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IngredientDetails from './IngredientDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={() => navigation.navigate('MealDetail' , {mealId: id})  }
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.mealItem,
          pressed ? { opacity: 0.9 } : null
        ]} // for IOS
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <IngredientDetails 
            duration={duration}
            complexity={complexity}
            affordability={affordability}
         />
        
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden', // ripple respects rounded corners
  },
  mealItem: {
    backgroundColor: '#fff',
    elevation: 4,            
    shadowColor: 'black',    
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
  },

});
