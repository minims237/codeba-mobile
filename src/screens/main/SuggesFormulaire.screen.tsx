import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formulaire} from '../../components/Formulaire.component';
import {COLORS} from '../../assets/themes/global.theme';

class SuggesFormulaire extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Formulaire />
      </View>
    );
  }
}

const BUTTON_SIZE = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container__new: {
    flex: 2,
    position: 'absolute',
    bottom: 12,
    justifyContent: 'center',
  },
});
export default SuggesFormulaire;
