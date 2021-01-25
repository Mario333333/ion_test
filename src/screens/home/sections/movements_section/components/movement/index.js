import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


const Movement = (props) => {

  const { item } = props

  return (
    <View style={styles.container}>
      <Image style={styles.containerImage} source={item.image}></Image>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textSubtitle}>{item.subTitle}</Text>
      </View >
      <View style={styles.containerInfo}>
        <Text style={{
          ...styles.textSubtitle,
          fontWeight: "300"
        }}>{item.time}</Text>
        <Text style={styles.textSubttextTitleitle}>{item.amount}</Text>
      </View >

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
  },
  containerImage: {
    left: 10,
    width: 44,
    height: 31,
    borderRadius: 4
  },
  containerTitle: {
    left: 20
  },
  containerInfo: {
    position: "absolute",
    right: 10
  },
  textTitle: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
  },
  textSubtitle: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
  },
});

export default Movement;
