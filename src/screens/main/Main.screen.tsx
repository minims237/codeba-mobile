import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  HEIGHTS,
  MARGINS,
  PADDINGS,
} from '../../assets/themes/global.theme';
import versement from '../../assets/imgs/don.png';
import don from '../../assets/imgs/versement.png';
import next from '../../assets/imgs/next.png';
import {inject, observer} from 'mobx-react';
import {UserStore} from '../../stores/user.stores';
import {VersementStore} from '../../stores/versement.stores';
interface MyProps {
  navigation: any;
  versementStore?: VersementStore;
  userStore?: UserStore;
}
@inject('versementStore', 'userStore')
@observer
class Main extends Component<MyProps> {
  componentDidMount = async () => {
    await this.props.versementStore!.getVersements();
    await this.props.versementStore!.getVersementByUser(
      this.props.userStore!.userBym.id,
    );
  };
  state = {
    mtotal: 0,
  };
  somme() {
    let val = 0;
    {
      this.props.versementStore!.verBuser.map((v: any) => {
        val = val + Number(v.montant);
      });
    }
    return val;
  }
  dernierEl() {
    let val = 0;
    let i = 0;
    {
      this.props.versementStore!.verBuser.map((v: any) => {
        i = i + 1;
        if (this.props.versementStore!.verBuser.length == i) {
          val = Number(v.montant);
        }
      });
    }
    return val;
  }
  dateVersement(){
    let val = "";
    let i = 0;
    let j=0;
    {
      this.props.versementStore!.verBuser.map((v: any) => {
        i = i + 1;
        if (this.props.versementStore!.verBuser.length == i) {
          for(let j=0;j<10; j++){
            val =val+ v.created_at[j];
           
          }
            
          
          
        }
      });
    }
    return val
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.operation}>
          <View style={styles.operation__last}>
            <Text style={styles.loginTxte}>{this.somme()} FCFA</Text>
            <Text style={{color: COLORS.inputBorder, fontSize: 12}}>
              {' '}
              Votre contribution au sein du CODEBAT
            </Text>
          </View>
          <View style={styles.op}>
            <View style={styles.op__1}>
              <View style={{marginTop: 20, margin: 10}}>
                <Text style={{color: COLORS.inputBorder, fontSize: 12}}>
                  Dernier versement
                </Text>
                <Text style={styles.loginTxt}>{this.dernierEl()} FCFA</Text>
              </View>
              <View>
                <Text style={{color: COLORS.inputBorder, fontSize: 12}}>
                  {this.dateVersement()}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.secondaryColor,
                borderWidth: 1,
                padding: 15,
                margin: 10,
                borderRadius: 8,
                marginTop: 40,
              }}
              onPress={() => this.props.navigation.navigate('historique')}>
              <Text
                style={{
                  color: COLORS.secondaryColor,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                mes versements
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.inputBorder,
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            QUE VOULIEZ VOUS FAIRE AUJOURDHUI?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.mode}
          onPress={() => this.props.navigation.navigate('versement')}>
          <Image source={don} style={{width: 35, height: 35}} />
          <Text
            style={{
              color: COLORS.secondaryColor,
              fontSize: 12,
              fontWeight: '500',
            }}>
            Faire un versement
          </Text>
          <Image source={next} style={{width: 20, height: 20}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mode}
          onPress={() => this.props.navigation.navigate('versement')}>
          <Image source={versement} style={{width: 35, height: 35}} />
          <Text
            style={{
              color: COLORS.secondaryColor,
              fontSize: 12,
              fontWeight: '500',
            }}>
            Faire un don
          </Text>
          <Image source={next} style={{width: 20, height: 20}} />
        </TouchableOpacity>
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
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.small,
  },
  loginTxte: {
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.medium,
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
  operation: {
    backgroundColor: COLORS.white,
    height: 250,
    marginTop: 70,
    margin: 20,
    borderRadius: 8,
    elevation: 2,
  },
  mode: {
    height: 70,
    backgroundColor: COLORS.white,
    margin: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 2,
  },
  operation__last: {
    height: 80,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.inputBorder,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  op: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  op__1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Main;
