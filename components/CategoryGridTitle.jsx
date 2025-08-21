import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'



const CategoryGridTitle = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem , {backgroundColor: color}]  }>
      <Pressable
       android_ripple={{color: '#ccc'}} 
       style={styles.button} 
       onPress={onPress}
       >
        <View style={styles.Text}>
            <Text style={styles.title}> {title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTitle


const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    button:{
        flex: 1,
    },
    Text:{
        textAlign: 'center',
        fontSize: 16,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    }

})