import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Splash, Bantuan, Transaksi, Inbox, Nearby, Lainnya, Login, Register } from '../pages';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colorPrimary, colorStatusBar, colorWhite } from '../asset/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const MyTab = () => {
    return (
        <Tab.Navigator
            activeColor={colorPrimary}
            barStyle={{ backgroundColor: '#fff', }}
            initialRouteName="Beranda"
        >
            <Tab.Screen
                name="Beranda" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Transaksi" component={Transaksi}
                options={{
                    tabBarLabel: 'Transaksi',
                    tabBarIcon: ({ color }) => (
                        <Icon name="wallet-outline" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Bantuan" component={Bantuan}
                options={{
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ color }) => (
                        <Icon name="help-circle" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Inbox" component={Inbox}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color }) => (
                        <Icon name="email" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Nearby" component={Nearby}
                options={{
                    tabBarLabel: 'Nearby',
                    tabBarIcon: ({ color }) => (
                        <Icon name="map-marker-radius" size={25} color={color} />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

const Route = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
        >
            <Stack.Screen name="Home" component={MyTab}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade

                }}
            />
            <Stack.Screen name="Splash" component={Splash}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade
                }} />

            <Stack.Screen name="Lainnya" component={Lainnya}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade
                }} />

            <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade
                }} />

            <Stack.Screen name="Register" component={Register}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: forFade
                }} />

        </Stack.Navigator>
    )
}

export default Route;