import React,{ useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS } from "../assets/themes/global.theme";
export const ModalPop = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        }
      else {
      setShowModal(false) 
        }
    };
  
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <View
            style={styles.modalContainer}>
            {children}
          </View>
        </View>
      </Modal>
    );
  };
  const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: COLORS.bgColor,
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
    },
    header: {
      width: '100%',
      height: 20,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });