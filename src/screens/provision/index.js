import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,

} from 'react-native';

import AvailableBalance from './components/available_balance'
import MonthlyTerm from './components/monthly_term'
import ArrowSVG from '../../utils/images/svg_icons/icon-arrow.svg'

const Provision = (props) => {
  const { navigation } = props
  const [article, setArticle] = useState("Auto");
  const [price, setPrice] = useState("$350,000.00");


  return (
    <View style={styles.container}>

      <View style={styles.header} >
        <TouchableOpacity onPress={() => {
          navigation.navigate('Home')
        }}>

          <ArrowSVG width="21" height="20" ></ArrowSVG>
        </TouchableOpacity>
        <Text style={styles.textCancel}>Cancelar</Text>
      </View>
      <Text style={styles.textTitle}>Disposición</Text>
      <AvailableBalance />
      <View style={styles.content} >
        <TextInput
          style={styles.inputTextForm}
          value={article}
          onChangeText={setArticle} />
        <TextInput
          style={styles.inputTextForm}
          value={price}
          onChangeText={setPrice} />
      </View>

      <Text style={styles.textTerm}>Selecciona tu plazo</Text>
      <MonthlyTerm />
      <TouchableOpacity style={styles.button}><Text style={styles.textButton}>LO QUIERO</Text></TouchableOpacity>

    </View >

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    width: "85%",
  },
  header: {
    paddingTop: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textTitle: {
    paddingTop: 21,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal"
  },
  content: {
    paddingTop: 24,
  },

  textTerm: {
    paddingTop: 18,
    color: "#333333",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    marginBottom: 12
  },
  inputTextForm: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#5acaee", padding: 10,
    height: 40,
    minWidth: 300,
    color: "#333333",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    marginBottom: 12

  },

  textCancel: {

    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "normal",
    color: "#22a8d2"
  },
  button: {
    backgroundColor: "#5acaee",
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    width: 310,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  textButton: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",

  },
});

export default Provision;
