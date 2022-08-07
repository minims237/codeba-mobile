import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  HEIGHTS,
  MARGINS,
  PADDINGS,
} from '../../assets/themes/global.theme';
import background from '../../assets/imgs/background.png';
import {UserStore} from '../../stores/user.stores';
import {inject, observer} from 'mobx-react';
import {CreateUserStore} from '../../stores/CreateUser.stores';
import {ScrollView} from 'react-native-gesture-handler';
import {AssociationStore} from '../../stores/association.stores';
interface MyProps {
  userStore?: UserStore;
  createUserStore?: CreateUserStore;
  navigation: any;
  associationStore?: AssociationStore;
}
@inject('userStore', 'createUserStore', 'associationStore')
@observer
class SignUp extends Component<MyProps> {
  componentDidMount = async () => {
    await this.props.userStore!.getUsers();
    await this.props.associationStore!.getAssociations();
  };

  state = {
    nom: '',
    association: '',
    sexe: '',
    quartier: '',
    pays: '',
    ville: '',
    numero: '',
    matricule: '',
    mdp: '',
    role: 'user',
    chargement: true,
  };
createMatricule(){
  let promes=new Promise((resolve,reject)=>{
    resolve(this.props.userStore!.users)
  })
  try {
    promes
    const nombreMembre=this.props.userStore!.users.length
  const date=Date.prototype.getFullYear()
return (date+nombreMembre)
  } catch (error) {
    console.log(error)
  }
  

}
  actual = async () => {
    let promess = new Promise((resolve, reject) => {
      resolve(this.props.userStore!.userBym);
    });
    try {
      await promess;
      this.setState({chargement: false});
      console.log('tres tres bon');
    } catch (e) {
      console.log(e);
    }
    return <Text></Text>;
  };
  async matricule() {
    const matricule = await this.props.userStore!.userBym.matricule;
    if (matricule == this.state.matricule) {
      return true;
    } else {
      return false;
    }
  }

  async signIn() {
    console.log('envoie des donnees', this.props.userStore!.users);
    await this.props.userStore!.getUserByMatricule(
      this.state.matricule,
      this.state.mdp,
    );
    const u = await this.actual();
    if (u) {
      const matri = await this.matricule();
      if (matri) {
        this.props.navigation.navigate('mainNavigation');
        return true;
      }
    }
  }
  async save() {
    if (this.state.nom == '') {
      Alert.alert('veillez saisir le nom');
    } else if (this.state.matricule == '') {
      Alert.alert('veillez saisir le matricule');
    } else if (this.state.association == '') {
      Alert.alert('veillez choisir votre association');
    } else if (this.state.sexe == '') {
      Alert.alert('veillez saisir choisir le votre sexe');
    } else if (this.state.mdp == '') {
      Alert.alert('veillez saisir le mot de pass');
    } else if (this.state.numero == '') {
      Alert.alert('veillez saisir votre numero');
    } else if (this.state.pays == '') {
      Alert.alert('veillez choisir votre pays');
    } else if (this.state.ville == '') {
      Alert.alert('veillez choisir votre ville');
    } else if (this.state.quartier == '') {
      Alert.alert('veillez choisir votre quartier');
    } else {
      if (
        await this.props.createUserStore!.createUser(
          this.state.nom,
          this.state.matricule,
          this.state.mdp,
          this.state.role,
          this.state.sexe,
          this.state.quartier,
          this.state.numero,
          this.state.pays,
          this.state.ville,
          this.state.association,
        )
      ) {
        if (await this.signIn()) {
          await this.props.userStore!.getUsers();
          this.props.navigation.navigate('mainNavigation');
          console.log(this.props.userStore!.users);
        }
      } else {
        Alert.alert("une erreur s'est produite");
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={background} style={styles.image} />
        </View>
        <View style={styles.bottom}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholderTextColor="black"
              placeholder="Nom"
              onChangeText={e => this.setState({nom: e})}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="black"
              placeholder="matricule codebat"
              value={this.createMatricule()}
              onChangeText={e => this.setState({matricule: e})}
              style={styles.input}
            />
            {console.log("le matricule",this.createMatricule())}
            <View style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.association}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({association: itemValue})
                }>
                <Picker.Item label="choisir une association" />
                {this.props.associationStore!.associations.map((a: any) => (
                  <Picker.Item label={a.nom} value={a.id} />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.sexe}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sexe: itemValue})
                }>
                <Picker.Item label="choisir votre sexe" />
                <Picker.Item label="homme" value="homme" />
                <Picker.Item label="femme" value="femme" />
              </Picker>
            </View>
            <TextInput
              placeholderTextColor="black"
              placeholder="Mot de passe"
              secureTextEntry
              onChangeText={e => this.setState({mdp: e})}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="black"
              placeholder="Numero"
              onChangeText={e => this.setState({numero: e})}
              style={styles.input}
            />
            <View style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.pays}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({pays: itemValue})
                }>
                <Picker.Item label="choisir votre pays" />
                <Picker.Item label="cameroun" value="cameroun" />
                <Picker.Item label="nigeria" value="nigeria" />
                <Picker.Item label="tchad" value="tchad" />
                <Picker.Item label="senegale" value="senegale" />
              </Picker>
            </View>
            <View style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.ville}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ville: itemValue})
                }>
                <Picker.Item label="choisir votre ville" />
                <Picker.Item label="Buea" value="Buea" />
                <Picker.Item label="Ebolowa" value="Ebolowa" />
                <Picker.Item label="Bafoussam" value="Bafoussam" />
                <Picker.Item label="Bamenda" value="Bamenda" />
                <Picker.Item label="Garoua" value="Garoua" />
                <Picker.Item label="Douala" value="Douala" />
                <Picker.Item label="Maroua" value="Maroua" />
                <Picker.Item label="Bertoua" value="Bertoua" />
                <Picker.Item label="Ngaoundere" value="Ngaoundere" />
                <Picker.Item label="Yaounde" value="Yaounde" />
              </Picker>
            </View>
            <View style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.quartier}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({quartier: itemValue})
                }>
                <Picker.Item label="choisir votre quartier" />
                <Picker.Item label="Suelah" value="Suelah" />
                <Picker.Item label="Tsenda'ah" value="Tsenda'ah" />
                <Picker.Item label="Ndana" value="Ndana" />
                <Picker.Item label="Sa'ah" value="Sa'ah" />
                <Picker.Item label="Zembing" value="Zembing" />
                <Picker.Item label="Zemni" value="Zemni" />
              </Picker>
            </View>
            {this.state.chargement ? (
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.loginTxt} onPress={() => this.save()}>
                  S'inscrire
                </Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator animating={true} size="large" color="white" />
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const BUTTON_SIZE = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  background: {},
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDINGS.medium,
  },
  image: {
    width: '100%',
    height: 215,
    borderBottomLeftRadius: BORDER_RADIUS.homeBackground,
    borderBottomRightRadius: BORDER_RADIUS.homeBackground,
  },
  connectButton: {
    backgroundColor: COLORS.secondaryColor,
    height: BUTTON_SIZE,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  input: {
    height: HEIGHTS.small,
    minWidth: '100%',
    color: 'black',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: BORDER_RADIUS.input,
    marginBottom: MARGINS.medium,
  },
  pickerItem: {
    height: HEIGHTS.small,
    minWidth: '100%',
    color: 'black',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: BORDER_RADIUS.input,
    marginBottom: MARGINS.medium,
  },
  loginTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.small,
  },
  signUpButton: {
    backgroundColor: COLORS.green,
    height: BUTTON_SIZE,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  hr: {
    borderBottomColor: 'rgb(100,100,100)',
    borderBottomWidth: 1,
    marginBottom: MARGINS.medium,
  },
  signUpContainer: {
    flex: 1,
    padding: PADDINGS.medium,
  },
  resetPassTxt: {
    marginTop: MARGINS.small,
    color: COLORS.secondaryColor,
  },
});
export default SignUp;
