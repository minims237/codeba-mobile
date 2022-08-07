import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Image} from 'react-native';
import {Routes} from '../consts/routes';
import React, {Component} from 'react';
import paie from '../assets/imgs/user.png';
import hom from '../assets/imgs/home.png';
import sug from '../assets/imgs/suggestion.png';
import noti from '../assets/imgs/notification.png';
const Tab = createMaterialTopTabNavigator();
export class MainNavigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: () => (
              <View>
                <Image source={hom} style={{width: 25, height: 25}} />
              </View>
            ),
          }}
          name={Routes.main.name}
          component={Routes.main.component}
        />
        
        <Tab.Screen
         options={{
          tabBarLabel: () => (
            <View>
              <Image source={sug} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
          name={Routes.suggestion.name}
          component={Routes.suggestion.component}
        />
           <Tab.Screen
         options={{
          tabBarLabel: () => (
            <View>
              <Image source={paie} style={{width: 25, height: 25}} />
            </View>
          ),
        }}
          name={Routes.paiement.name}
          component={Routes.paiement.component}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => (
              <View>
                <Image source={noti} style={{width: 25, height: 25}} />
              </View>
            ),
          }}
          name={Routes.notification.name}
          component={Routes.notification.component}
        />
     
      </Tab.Navigator>
    );
  }
}
