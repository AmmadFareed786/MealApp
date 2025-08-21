import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'

const IngredientDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
     <View style={[styles.details, style] }>
        <Text style={[styles.detailItems, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItems, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItems, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default IngredientDetails

const styles = StyleSheet.create({
    details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
    color: '#555',
  },
})

