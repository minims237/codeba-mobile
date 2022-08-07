import {Routes} from '../consts/routes';
import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export class AuthNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name={Routes.home.name} component={Routes.home.component} />
        <Stack.Screen options={{ header: () => null }} name={Routes.signup.name} component={Routes.signup.component} />
      </Stack.Navigator>
    );
  }
}
