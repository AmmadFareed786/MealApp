// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import MealOverviewScreen from '../screens/MealOverviewScreen';
// import MealDetails from '../screens/MealDetails';
// import DrawerNavigation from './DrawerNavigation';

// const Stack = createNativeStackNavigator();

// export default function StackNavigation() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Drawer" 
//         component={DrawerNavigation}   // ✅ real screen
//         options={{
//           title: "All Categories",
//           // headerStyle: { backgroundColor: '#351401' },
//           // headerTintColor: 'white',
//           // contentStyle: { backgroundColor: '#3f2f25' }
//         }}
//       />
//       <Stack.Screen 
//         name="MealOverview" 
//         component={MealOverviewScreen}   // ✅ real screen
//         options={{
//           title: "Meals Overview", 
//           headerStyle: { backgroundColor: '#351401' }, 
//           headerTintColor: 'white', 
//           contentStyle: { backgroundColor: '#3f2f25' }
//         }}
//       />
//       <Stack.Screen 
//         name="Details" 
//         component={MealDetails}   // ✅ real screen
//         options={{
//           headerStyle: { backgroundColor: '#351401' }, 
//           headerTintColor: 'white'
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
