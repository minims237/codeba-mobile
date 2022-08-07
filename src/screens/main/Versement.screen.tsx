import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {
  COLORS,

} from '../../assets/themes/global.theme';
import orange from '../../assets/imgs/o.jpeg';
import mtn from '../../assets/imgs/m.jpg';
import { ModalPop } from '../../components/Pop.components';
import { VersementStore } from '../../stores/versement.stores';
import { UserStore } from '../../stores/user.stores';
import { inject,observer } from 'mobx-react';
interface Myprops {
  versementStore?:VersementStore;
  userStore?: UserStore;
  navigation: any;
}
@inject("versementStore","userStore")
@observer
class Versement extends Component<Myprops> {
  componentDidMount = async () => {
    await this.props.versementStore!.getVersements()
    await this.props.versementStore!.getVersementByUser(this.props.userStore!.userBym.id)
  };
  state = {
    visible:false,
    montant:"",
    numero:"",
    intitule:"versement",
  };
  async save(){
    console.log("versement en cours")
    await this.props.versementStore!.newVersement(
      this.state.montant,
      this.state.numero,
      this.state.intitule,
      this.props.userStore!.userBym.id
    )
    await this.props.versementStore!.getVersements()
    await this.props.versementStore!.getVersementByUser(this.props.userStore!.userBym.id)
    this.setState({visible:false})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container__mode__D}>
          <Text style={{color:COLORS.white,fontWeight:"bold"}}>DEPOT SUR LE COMPTE DE CODEBAT</Text>
        </View>
        <View style={{marginTop:50}}><Text style={{color:COLORS.inputBorder}}>PAIEMENTS MOBILES</Text></View>
        
        <View style={styles.container__pmode}>
        <TouchableOpacity style={styles.container__mode} onPress={()=>this.setState({visible:true})}>
          <Image source={orange} style={{width: 170, height: 150}} />
          <View style={styles.container__mode__bas}>
            <Text style={{color:COLORS.white}}> Orange</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container__mode}  onPress={()=>this.setState({visible:true})}>
          <Image source={mtn} style={{width: 170, height: 150}} />
          <View style={styles.container__mode__bas}>
            <Text style={{color:COLORS.white}}>MTN Cameroun</Text>
          </View>
        </TouchableOpacity>

        </View>
        <ModalPop visible={this.state.visible}>
        <View style={styles.container__header}>
                <View style={styles.container__header__close}>
                  <TouchableOpacity
                    onPress={() => this.setState({visible: false})}>
                    <Text>close</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.container__form}>
                <View style={styles.container__form__item}>
                  <Text style={styles.container__form__item__label}>Montant</Text>
                  <View style={styles.container__form__item__input}>
                    <TextInput placeholder="" onChangeText={(e)=>this.setState({montant:e})}/>
                  </View>{console.log(this.state.montant)}
                </View>
                
                <View style={styles.container__form__item}>
                  <Text style={styles.container__form__item__label}>
                    Numero
                  </Text>
                  <View style={styles.container__form__item__input}>
                    <TextInput placeholder="" onChangeText={(e)=>this.setState({numero:e})}/>
                  </View>{console.log(this.state.numero)}
                </View>
                <TouchableOpacity
                  onPress={()=> this.save()}
                  style={styles.container__from__item__btn}>
                  <Text style={{color: '#fff', fontSize: 16}}>Save</Text>
                </TouchableOpacity>
              </View>
        </ModalPop>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    
  },
  container__pmode:{
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  container__mode:{
    width:170,
    height:150,
    elevation:2,
    margin:5,
    marginTop:60
  },
  container__mode__bas:{
    backgroundColor:COLORS.secondaryColor,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:'100%'
  },
  container__mode__D:{
    backgroundColor:COLORS.secondaryColor,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:'100%'
  },
  container__header: {alignItems: 'center',},
  container__header__close: {
    width: '100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },
  container__view__center: {
    alignItems: 'center',
  },
  container__form: {
    marginVertical: 10,
  },
  container__form__item: {
    flexDirection: 'row',
    paddingVertical: 5,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:"center"
  },
  container__form__item__input: {
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    borderRadius: 1,
    width: 170,
    height: 38,
  },
  container__form__item__label: {
    fontSize: 14,
    paddingLeft: 6,
    marginRight:10
  },
  container__form__picker: {
    fontSize: 12,
  },
  container__from__item__btn: {
    backgroundColor: COLORS.secondaryColor,
    marginLeft:65,
    width: 70,
    borderRadius: 10,
    alignItems: 'center',
    height: 30,
    marginTop:10
  },
  container__form__item__deleted: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__form__item__btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container__form__btn__text: {
    padding: 20,
  },
});
export default Versement;
