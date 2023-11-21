import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductHome from '../../screens/product-screen';



const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
            <Stack.Navigator
            initialRouteName="Product"
            screenOptions={{
                headerShown: false,
              }}
            >
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="ProductHome" component={ProductHome} />
            </Stack.Navigator>
    );
}

export default StackNavigation;