import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import AnimatedCircle from "./components/animated_circle"
const MonthlyTerm = (props) => {
  return (
    <View style={styles.container}>
      <AnimatedCircle />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Saldo disponible</Text>
        <Text style={styles.textAmount}>$12,000.00</Text>
        <Text style={styles.textTerm}>a 60 meses</Text>
        <Text style={styles.textInterest}>Taza e interés</Text>
        <Text style={styles.textInterest}>16.6%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 340,
    alignSelf: "center",
  },
  textContainer: {
    position: "absolute",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 60

  },
  textTitle: {
    color: "#222b45",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",

  },
  textAmount: {
    color: "#222b45",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",

  },
  textTerm: {
    color: "#222b45",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",

  },
  textInterest: {
    color: "#5acaee",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",

  },

});

export default MonthlyTerm;
