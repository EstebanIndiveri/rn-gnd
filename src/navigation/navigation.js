import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import DetailsProductScreen from '../screens/DetailsProduct/DetailsProduct.screen';

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator headerMode="none"> */}
        {/* <Stack.Screen name="Home" component={MyTabs} /> */}
        {/* add your another screen here using -> Stack.Screen */}
      {/* </Stack.Navigator> */}
      <Stack.Navigator
      screenOptions={{
        gestureEnabled:true,
        gestureDirection:'horizontal',
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        headerStyle:{
          backgroundColor:'#FFDA00',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle:{
          fontWeight:'bold',
        },
        headerTintColor:'#323232',
      }}
      headerMode="float"
      >
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:'My home',
          headerTitleAlign:'center',
        }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title:'My profile',
          headerTitleAlign:'center',
        }}
        />
        <Stack.Screen
        name="DetailsProduct"
        component={DetailsProductScreen}
        options={{
          title:'Details Product',
          headerTitleAlign:'center',
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
