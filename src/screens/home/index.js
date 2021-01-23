import React, { useState } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import HeaderSection from './sections/header_section'
import ItemsSection from './sections/items_section'
import MovementsSection from './sections/movements_section'
import AvailableBalance from './components/available_balance'
import NextPayment from './components/next_payment'
import Navigator from './components/navigator'

const Home = (props) => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <HeaderSection />
      <AvailableBalance />
      <ItemsSection />
      <NextPayment />
      <MovementsSection />
      <Navigator navigation={navigation} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

export default Home;
