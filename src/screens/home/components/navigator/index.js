import React, { } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';


import Money from '../../../../utils/images/svg_icons/icon-money.svg'
import CreditCard from '../../../../utils/images/svg_icons/icon-credit-card.svg'
import Bell from '../../../../utils/images/svg_icons/icon-bell.svg'
import StarSVG from '../../../../utils/images/svg_icons/icon-star.svg'


const Navigator = (props) => {
  const { navigation } = props
  return (
    <View style={{
      ...styles.container,
    }}>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Provision')
      }}>
        <Money width="21" height="20" ></Money>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Provision')
      }}>
        <CreditCard width="21" height="20" ></CreditCard>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => {
        navigation.navigate('Provision')
      }}>
        <StarSVG width="21" height="20" ></StarSVG>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => {
        navigation.navigate('Provision')
      }}>
        <Bell width="21" height="20" ></Bell>
      </TouchableOpacity >

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 1000,
    height: 82,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowOpacity: .5,
    bottom: 0,
    left: 0,
    right: 0
  },


});

export default Navigator;
