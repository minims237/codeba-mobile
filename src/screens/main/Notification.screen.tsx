import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  HEIGHTS,
  MARGINS,
  PADDINGS,
} from '../../assets/themes/global.theme';
import {NotificationC} from '../../components/NoticationC.component';
import {CommuniqueStore} from '../../stores/communique.stores';
import {UserStore} from '../../stores/user.stores';
interface MyProps {
  userStore?: UserStore;
  communiqueStore?: CommuniqueStore;
  navigation: any;
}
@inject('userStore', 'communiqueStore')
@observer
class Notification extends Component<MyProps> {
  componentDidMount = async () => {
    await this.props.userStore!.getUsers();
    await this.props.communiqueStore!.getcommuniques();
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>
        {this.props.communiqueStore!.communiques.map((c: any) => (
          <View style={styles.com}>
            <Text>
              Reunion de la communauté Batsengla le 19-01-22, nous avisons a
              tout les membres que le conseiller Gervais Jeudong sera présent.
            </Text>
            <Text style={styles.date}>02-01-22 10h30</Text>
          </View>
        ))}
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

  flatContainer: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.input,
    marginTop: MARGINS.medium,
    padding: PADDINGS.small,
  },
  com: {
    minHeight: 50,
    backgroundColor: '#EFFFFF',
    borderRadius: BORDER_RADIUS.input,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDINGS.small,
    width: '100%',
  },
  date: {
    fontSize: 0.6 * FONT_SIZE.small,
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 0.7 * MARGINS.small,
  },
});
export default Notification;
