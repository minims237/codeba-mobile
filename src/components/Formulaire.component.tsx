import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../assets/themes/global.theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {suggestionsStore} from '../stores/suggestion.stores';
import {inject, observer} from 'mobx-react';
import { UserStore } from '../stores/user.stores';
import { NavigationActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native';
import { keys } from 'mobx';

interface Myprops {
  suggestionStore?: suggestionsStore;
  userStore?:UserStore;
  navigation: any;
}
@inject('suggestionStore',"userStore")
@observer
export class Formulaire extends Component<Myprops> {
  componentDidMount = async () => {
    await this.props.suggestionStore!.getsuggestions();
    await this.props.suggestionStore!.getsuggestionsByUser(this.props.userStore!.userBym.id)
  };
  state = {
    objet: '',
    suggestion: '',
  };
 
  async save() {
    console.log("utilisateur ",this.props.userStore!.userBym.id)
    await this.props.suggestionStore!.createSuggestion(
      this.state.objet,
      this.state.suggestion,
      this.props.userStore!.userBym.id
    );
    await this.props.suggestionStore!.getsuggestions();
    await this.props.suggestionStore!.getsuggestionsByUser(this.props.userStore!.userBym.id)
      this.setState({objet:""})
      this.setState({suggestion:""})
       
  }

  render() {
    return (
      <View>
        <View style={styles.ctn}>
          <View>
            <View style={styles.formulaire}>
              <TextInput
                style={styles.inp}
                placeholder="De"
                value={this.props.userStore!.userBym.nom}
                placeholderTextColor={COLORS.inputBorder}
              />
            </View>
            <View style={styles.formulaire}>
              <TextInput
                onChangeText={e => this.setState({objet: e})}
                style={styles.inp}
                placeholder="Objet"
                value={this.state.objet}
                placeholderTextColor={COLORS.inputBorder}
              />
            </View>
            <View>
              <TextInput
                onChangeText={e => this.setState({suggestion: e})}
                style={styles.inp}
                placeholder="Redigez votre suggestion"
                value={this.state.suggestion}
                placeholderTextColor={COLORS.inputBorder}
              />
              {console.log(this.state.objet, this.state.suggestion)}
            </View>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={()=>this.props.navigation.goBack('mainNavigation')}>
            <Text style={styles.text}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const BUTTON_SIZE = 45;
const styles = StyleSheet.create({
  ctn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  formulaire: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: COLORS.inputBorder,
    borderBottomWidth: 0.4,
    justifyContent: 'center',
  },
  inp: {
    width: '100%',
    padding: 20,
  },
  formulaireTxt: {
    color: COLORS.inputBorder,
  },
  signUpButton: {
    backgroundColor: COLORS.secondaryColor,
    height: BUTTON_SIZE,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    color: COLORS.white,
  },
});
