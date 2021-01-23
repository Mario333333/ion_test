import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import AvailableBalance from './components/available_balance'
import MonthlyTerm from './components/monthly_term'
import ArrowSVG from '../../utils/images/svg_icons/icon-arrow.svg'

const Provision = (props) => {
  const { navigation } = props
  const [article, setArticle] = useState("Auto");
  const [price, setPrice] = useState("$350,000.00");


  return (<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      <TouchableOpacity title="Pagar ahora" style={styles.button}><Text style={styles.textButton}>LO QUIERO</Text></TouchableOpacity>

    </View >
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  textTitle: {
    position: "absolute",
    top: 117,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal"
  },
  textTerm: {
    top: 320,
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
  content: {
    top: 310,
  },
  header: {
    top: 72,
    flexDirection: "row",
    alignItems: "center"
  },
  textCancel: {
    position: "absolute",
    right: 0,
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "normal",
    color: "#22a8d2"
  },
  button: {
    backgroundColor: "#5acaee",
    position: "absolute",
    top: 724,
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
