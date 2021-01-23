import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

const AvailableBalance = () => {
  let leftValueToCenterContainer = (Dimensions.get("window").width - 300) / 2;
  return (
    <View style={{
      ...styles.container,
      left: leftValueToCenterContainer
    }}>
      <Text style={styles.textTitle}>Saldo disponible</Text>
      <Text style={styles.textAmount}>$1,499,970.00</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    top: 118,
    zIndex: 1000,
    width: 300,
    height: 86,
    borderRadius: 4,
    shadowOpacity: .5
  },
  textTitle: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    top: 10,
    left: 10,
  },
  textAmount: {
    color: "#bb64c8",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "normal",
    top: 20,
    left: 10,
  },

});

export default AvailableBalance;
