import React, { } from 'react';

import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

const AvailableBalance = () => {
  return (
    <View style={{
      ...styles.container,

    }}>
      <Text style={styles.textTitle}>Saldo disponible</Text>
      <Text style={styles.textAmount}>$1,499,970.00</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    backgroundColor: "white",
    width: "100%",
    height: 120,
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
