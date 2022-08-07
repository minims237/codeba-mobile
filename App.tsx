import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/navigations/AppNavigation.navigations';
import { Provider } from 'mobx-react';
import { appRootStore } from './src/stores/root.stores';

class App extends Component {
  render() {
    return (
      <Provider {...appRootStore}>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer></Provider>);
  }
}

export default App;
