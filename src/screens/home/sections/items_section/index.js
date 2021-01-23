import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Image,
  Text
} from 'react-native';

import BellSVG from '../../../../utils/images/white_icons/icon_bell_white.svg'
import LabelSVG from '../../../../utils/images/white_icons/icon_label_white.svg'
import StarSVG from '../../../../utils/images/white_icons/icon_star_white.svg'

const ItemsSection = () => {
  const [isDefaultSignIn, setIsDefaultSignIn] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <StarSVG width="21" height="20" ></StarSVG>
        <Text style={styles.text} >Crear Logro</Text>
      </View>
      <View style={styles.iconContainer}>
        <LabelSVG width="21" height="20" ></LabelSVG>
        <Text style={styles.text}>Pagar servicio</Text>
      </View>
      <View style={styles.iconContainer}>
        <BellSVG width="21" height="20" ></BellSVG>
        <Text style={styles.text}>Subscripción</Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    height: 116,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#783183",
    justifyContent: "space-around"
  },
  icon: {
    width: 21,
    height: 20,
    tintColor: "white",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    color: "white"

  }
});

export default ItemsSection;
