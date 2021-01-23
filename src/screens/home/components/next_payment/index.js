import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import money from '../../../../utils/images/png_icons/money.png'
import creditCard from '../../../../utils/images/png_icons/credit-card.png'

const NextPayment = () => {
  let leftValueToCenterContainer = (Dimensions.get("window").width - 300) / 2;
  return (
    <View style={{
      ...styles.container,
      left: leftValueToCenterContainer
    }}>
      <View>
        <Text style={styles.textTitle}>Tu proximo pago</Text>
        <Text style={styles.textAmount}>$1,499,970.00</Text>
      </View>
      <View>
        <Text style={styles.textTitleDate}>Fecha de pago</Text>
        <Text style={styles.textDate}>16 de enero</Text>
        <TouchableOpacity title="Pagar ahora" style={styles.button}><Text style={styles.textButton}>PAGAR AHORA</Text></TouchableOpacity>
      </View>
      <View style={styles.containerInfo}>
        <Image style={styles.icon} source={money}></Image>
        <Text style={styles.textInfo}>Mis logros</Text>
        <Text style={styles.textAmountInfo}>$27,260.00</Text>
      </View>

      <View style={styles.containerInfo}>
        <Image style={styles.icon} source={creditCard}></Image>
        <Text style={styles.textInfo}>Compras con TDC</Text>
        <Text style={styles.textAmountInfo}>$1,600.00</Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    top: 277,
    zIndex: 1000,
    width: 300,
    height: 186,
    borderRadius: 4,
    shadowOpacity: .5,
    display: "flex",
    paddingLeft: 10,
    justifyContent: "space-around"

  },
  containerInfo: {
    display: "flex",
    flexDirection: "row"
  },
  textInfo: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    left: 10
  },
  textAmountInfo: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    position: "absolute",
    right: 10
  },
  textTitle: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  textAmount: {
    color: "#333333",
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "normal",
  },
  textTitleDate: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  textDate: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
  },
  icon: {
    width: 21,
    height: 20,
    tintColor: "#5acaee",
  },
  button: {
    backgroundColor: "#5acaee",
    position: "absolute",
    right: 10,
    width: 120,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  textButton: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",

  },

});

export default NextPayment;
