import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
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
import { UserStore } from '../../stores/user.stores';
import { inject, observer } from 'mobx-react';
interface MyProps{
  userStore?:UserStore
  navigation:any
}
@inject('userStore')
@observer
class Home extends Component<MyProps>{
  componentDidMount=async()=>{
    await this.props.userStore!.getUsers();
  } 
 
  state = {
    matricule:"",
    mdp:"",
   chargement:true,
   showmdp:true,
  };
  
  async matricule(){
    const matricule=await this.props.userStore!.userBym.matricule
    if(matricule==this.state.matricule){
      return true
    }else{
      return false
    }
  }
 
  async signIn(){
    console.log("envoie des donnees",this.props.userStore!.users);
    if(this.state.matricule==""){
      Alert.alert("veillez saisir le matricule")
    }else if(this.state.mdp==""){
      Alert.alert("veillez saisir votre mot de pass")
    }else{
      this.setState({chargement:false})
      await this.props.userStore!.getUserByMatricule(this.state.matricule,this.state.mdp)
      const matri=await this.matricule()
      if(await this.actual()){
         if(matri){
        this.props.navigation.navigate("mainNavigation")
      }
      }
     
    }
  }

  actual = async ()=>{
    let promess = new Promise((resolve,reject)=>{
     resolve(  this.props.userStore!.userBym)
   })
   try{
    await promess
    this.setState({chargement:false})
    console.log("tres tres bon")
   }catch(e){
     this.setState({chargement:true})
     console.log(e)
   }
   return <Text></Text>

  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={background} style={styles.image} />
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholderTextColor="black"
            placeholder="Entrer votre matricule Codebat"
            onChangeText={e=>this.setState({matricule:e})}
            style={styles.input}
          />
          {console.log(this.state.matricule)}
          <TextInput
            placeholderTextColor="black"
            placeholder="Entrer votre Mot de passe"
            
            secureTextEntry 
            onChangeText={e=>this.setState({mdp:e})}
            style={styles.input}
          />
           {console.log(this.state.mdp)}
           {this.state.chargement? 
           <TouchableOpacity style={styles.connectButton} onPress={()=>this.signIn()}>
            <Text style={styles.loginTxt}>Se connecter</Text>
          </TouchableOpacity>
           :
           <ActivityIndicator animating={true} size="large" color={COLORS.secondaryColor} />
           }
         
          <Text style={styles.resetPassTxt}>Mot de passe oublié ?</Text>
        </View>
        <View style={styles.signUpContainer}>
          <View style={styles.hr}></View>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.loginTxt} onPress={()=> this.props.navigation.navigate("signup")}>S'inscrire</Text>
          </TouchableOpacity>
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
  background: {
    flex: 2,
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDINGS.medium,
  },
  image: {
    width: '100%',
    height: '100%',
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
    width: '100%',
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
export default Home;
