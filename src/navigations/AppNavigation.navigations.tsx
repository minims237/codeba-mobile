import {Routes} from '../consts/routes';
import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createStackNavigator();
export class AppNavigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen options={{ header: () => null }} name={Routes.authNavigation.name} component={Routes.authNavigation.component} /> 
        <Tab.Screen options={{ header: () => null }} name={Routes.mainNavigation.name} component={Routes.mainNavigation.component} />
        <Tab.Screen options={{ detachPreviousScreen:true}} name={Routes.formulaire.name} component={Routes.formulaire.component}/>
        <Tab.Screen options={{ detachPreviousScreen:true}} name={Routes.historique.name} component={Routes.historique.component}/>
        <Tab.Screen options={{ detachPreviousScreen:true}} name={Routes.versement.name} component={Routes.versement.component}/>
      </Tab.Navigator>
    );
  }
}
