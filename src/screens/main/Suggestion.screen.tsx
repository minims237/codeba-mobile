import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BORDER_RADIUS,
  COLORS,
  PADDINGS,
} from '../../assets/themes/global.theme';
import {ModalPop} from '../../components/Pop.components';
import {suggestionsStore} from '../../stores/suggestion.stores';
import {UserStore} from '../../stores/user.stores';
interface Myprops {
  suggestionStore?: suggestionsStore;
  userStore?: UserStore;
  navigation: any;
}
@inject('suggestionStore', 'userStore')
@observer
class Suggestion extends Component<Myprops> {
  componentDidMount = async () => {
    await this.props.suggestionStore!.getsuggestions();
    await this.props.suggestionStore!.getsuggestionsByUser(
      this.props.userStore!.userBym.id,
    );
  };
  state = {
    visible: false,
    objet: '',
    suggestion: '',
    chargement: true,
  };
  actualise = async () => {
    let promesse = new Promise((resolve, reject) => {
      resolve(this.props.suggestionStore!.suggestionsbyusers);
    });
    try {
      await promesse;
      this.setState({chargement: true});
    } catch (error) {
      console.log(error);
    }
  };

  async save() {
    this.setState({chargment: false});
    console.log('utilisateur ', this.props.userStore!.userBym.id);
    let promesse = new Promise((resolve, reject) => {
      resolve(
        this.props.suggestionStore!.createSuggestion(
          this.state.objet,
          this.state.suggestion,
          this.props.userStore!.userBym.id,
        ),
      );
    });
    try {
      await promesse;
      await this.props.suggestionStore!.getsuggestions();
      await this.props.suggestionStore!.getsuggestionsByUser(
        this.props.userStore!.userBym.id,
      );
      this.setState({objet: ''});
      this.setState({suggestion: ''});
      this.setState({visible: false});
      this.setState({chargement: true});
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container__blist}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {console.log(this.props.suggestionStore!.suggestionsbyusers)}
            {this.props.suggestionStore!.suggestionsbyusers.map((s: any) => (
              <View style={styles.container__list}>
                <Text>{s.objet}</Text>
                <Text>{s.description} </Text>
                <View style={styles.container__date}>
                  <Text>12-10-2000</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container__new}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({visible: true})}>
            <Text style={styles.btnText}>+ votre suggestion</Text>
          </TouchableOpacity>
        </View>
        <ModalPop visible={this.state.visible}>
          <View style={styles.suggestion}>
            <View style={styles.container__header}>
              <View style={styles.container__header__close}>
                <Button
                  onPress={() => this.setState({visible: false})}
                  title="close"
                  color="white"
                />
              </View>
            </View>
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
            </View>
          </View>
          {this.state.chargement?
          <Button onPress={() => this.save()} title="Envoyer" />
          :
          <ActivityIndicator animating={true} size="large" color={COLORS.secondaryColor} />
          }
          
        </ModalPop>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container__new: {
    flex: 2,
    bottom: 12,
    justifyContent: 'center',
    marginHorizontal: 14,
    position: 'absolute',
    right: 8,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: COLORS.white,
    height: 50,
    width: 200,
    elevation: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.secondaryColor,
    fontSize: 17,
  },
  container__list: {
    marginVertical: 15,
    minHeight: 80,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.input,
    padding: PADDINGS.small,
    minWidth: '100%',
    elevation: 2,
  },
  container__blist: {
    paddingHorizontal: 15,
  },
  container__date: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  suggestion: {
    minHeight: 300,
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
  container__header__close: {
    width: '100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signUpButton: {
    backgroundColor: COLORS.secondaryColor,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    color: COLORS.white,
  },
  container__header: {alignItems: 'center'},
});
export default Suggestion;
