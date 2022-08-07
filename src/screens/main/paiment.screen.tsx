import React, {Component} from 'react';
import {View, StyleSheet, Image, Button, Text} from 'react-native';

import {COLORS} from '../../assets/themes/global.theme';
import prof from '../../assets/imgs/account.png';
import call from '../../assets/imgs/call.png';
import hoe from '../../assets/imgs/hoe.png';
import pays from '../../assets/imgs/pays.png';
import sexe from '../../assets/imgs/sexe.png';
import ville from '../../assets/imgs/ville.png';
import quartier from '../../assets/imgs/quartier.png';

import {ModalPop} from '../../components/Pop.components';
import {inject, observer} from 'mobx-react';
import {UserStore} from '../../stores/user.stores';
import {VersementStore} from '../../stores/versement.stores';
import {TextInput} from 'react-native-gesture-handler';
interface MyProps {
  navigation: any;
  userStore?: UserStore;
}
@inject('userStore')
@observer
class Paiement extends Component<MyProps> {
  state = {
    visible: false,
    nom: this.props.userStore!.userBym.nom,
    association: '',
    sexe: this.props.userStore!.userBym.sexe,
    quartier: this.props.userStore!.userBym.quartier,
    pays: this.props.userStore!.userBym.paysResidence,
    ville: this.props.userStore!.userBym.villeResidence,
    numero: this.props.userStore!.userBym.numero,
    matricule: '',
    mdp: '',
    role: 'user',
    chargement:true,
  };
  save() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_profil}></View>
        <View style={styles.pp}>
          <View style={styles.profil}>
            <Image source={prof} style={{width: 120, height: 120}} />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.Item}>
            <Image source={prof} style={{width: 20, height: 20}} />
            <Text>{this.props.userStore!.userBym.nom}</Text>
          </View>
          <View style={styles.Item}>
            <Image source={prof} style={{width: 20, height: 20}} />
            <Text>{this.props.userStore!.userBym.matricule}</Text>
          </View>
          <View style={{width: '100%'}}>
            <Button
              title="modifier mon profil"
              onPress={() => this.setState({visible: true})}
            />
          </View>
        </View>
        <View style={styles.ItemProfil}>
          <View style={styles.Item}>
            <Image
              source={sexe}
              style={{width: 20, height: 20, marginRight: 20}}
            />
            <Text>{this.props.userStore!.userBym.sexe}</Text>
          </View>
          <View style={styles.Item}>
            <Image
              source={quartier}
              style={{width: 20, height: 20, marginRight: 20}}
            />
            <Text>{this.props.userStore!.userBym.quartier}</Text>
          </View>
          <View style={styles.Item}>
            <Image
              source={call}
              style={{width: 20, height: 20, marginRight: 20}}
            />
            <Text>{this.props.userStore!.userBym.numero}</Text>
          </View>
          <View style={styles.Item}>
            <Image
              source={ville}
              style={{width: 20, height: 20, marginRight: 20}}
            />
            <Text>{this.props.userStore!.userBym.villeResidence}</Text>
          </View>
          <View style={styles.Item}>
            <Image
              source={pays}
              style={{width: 15, height: 15, marginRight: 20}}
            />
            <Text>{this.props.userStore!.userBym.paysResidence}</Text>
          </View>
        </View>
        <ModalPop visible={this.state.visible}>
          <View style={styles.container__header}>
            <View style={styles.container__header__close}>
              <Button
                onPress={() => this.setState({visible: false})}
                title="close"
                color="white"
              />
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Nom</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.nom} onChangeText={event => this.setState({nom: event})}/>
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Sexe</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.sexe} onChangeText={event => this.setState({sexe: event})}/>
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Quartier</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.quartier} onChangeText={event => this.setState({quartier: event})}/>
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Numero</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.numero} onChangeText={event => this.setState({numero: event})}/>
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Ville</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.ville} onChangeText={event => this.setState({ville: event})}/>
            </View>
          </View>
          <View>
            <Text style={{color:COLORS.secondaryColor}}>Pays</Text>
            <View style={{width:"100%",borderBottomColor:COLORS.inputBorder,borderBottomWidth:1,marginBottom:10,paddingLeft:6}}>
              <TextInput value={this.state.pays} onChangeText={event => this.setState({pays: event})}/>
            </View>
          </View>
          <Button onPress={() => this.save()} title="Modifier" />
        </ModalPop>
      </View>
    );
  }
}

const BUTTON_SIZE = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    display: 'flex',
    flexDirection: 'column',
  },
  Item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: 70,
    marginVertical: 10,
  },
  header_profil: {
    minHeight: 150,
    minWidth: '100%',
    backgroundColor: COLORS.secondaryColor,
  },
  pp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemProfil: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profil: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: COLORS.secondaryColor,
    borderColor: COLORS.white,
    borderWidth: 10,
    marginTop: -70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__header: {alignItems: 'center'},
  container__header__close: {
    width: '100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
export default Paiement;
