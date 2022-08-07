import {inject, observer} from 'mobx-react';
import { storedAnnotationsSymbol } from 'mobx/dist/internal';
import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONT_SIZE} from '../../assets/themes/global.theme';
import {UserStore} from '../../stores/user.stores';
import {VersementStore} from '../../stores/versement.stores';

interface MyProps {
  navigation: any;
  versementStore?: VersementStore;
  userStore?: UserStore;
}
@inject('versementStore', 'userStore')
@observer
class Historique extends Component<MyProps> {
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
  dateVersement(id:String) {
    let val = '';
    let i=0;
    let j = 0;
    {
      this.props.versementStore!.verBuser.map((v: any) => {
        i = i + 1;
        if(id==v.id){
          for (let j = 0; j < 10; j++) {
            val = val + v.created_at[j];
          }
        }
      });
    }
    return val;
  }
  heureVersement(id:String) {
    let val = '';
    let i=0;
    let j = 0;
    {
      this.props.versementStore!.verBuser.map((v: any) => {
        i = i + 1;
        if(id==v.id){
          for (let j = 12; j < 16; j++) {
            val = val + v.created_at[j];
          }
        }
      });
    }
    return val;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: COLORS.inputBorder, fontWeight: 'bold'}}>
          VOS VERSEMENTS
        </Text>
        <View style={styles.operation}>
          <View style={styles.operation__last}>
            <Text style={styles.loginTxte}> {this.somme()} FCFA</Text>
            <Text style={{color: COLORS.inputBorder, fontSize: 12}}>
              {' '}
              Votre contribution CODEBAT
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: COLORS.inputBorder, fontWeight: 'bold'}}>
            VOS DERNIERS VERSEMENTS
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {this.props.versementStore!.verBuser.map((v: any) => (
            <View style={styles.last}>
              <View style={styles.inlineOp}>
                <View>
                  <Text>{this.dateVersement(v.id)} | {this.heureVersement(v.id)}</Text>
                </View>
                <View>
                  <Text style={styles.loginTxt}>{v.montant} FCFA</Text>
                </View>
              </View>
              <View>
                <Text style={{color:COLORS.succesColor}}>paiement reuissit</Text>
              </View>
              <View style={styles.inlineOp}>
                <View style={{marginLeft:10,borderLeftWidth:3,borderLeftColor:COLORS.inputBorder,paddingLeft:2}}>
                  <Text style={{color:COLORS.inputBorder}}>source</Text>
                </View>
                <View>
                  <Text style={{color:COLORS.inputBorder}}>{v.numero}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const BUTTON_SIZE = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  loginTxte: {
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.medium,
  },
  loginTxt: {
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.small,
  },
  background: {
    flex: 2,
  },

  operation__last: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operation: {
    backgroundColor: COLORS.white,
    height: 120,
    marginTop: 10,
    margin: 20,
    borderRadius: 8,
    elevation: 2,
    width: '100%',
  },
  lastOperation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    paddingHorizontal: 5,
  },
  last: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    height: 110,
    marginTop: 10,
    borderRadius: 8,
    elevation: 2,
    minWidth: '100%',
    padding: 10,
  },
  inlineOp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingRight: 5,
  },
});
export default Historique;
