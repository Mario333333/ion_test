import React, { } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import star from '../../../../utils/images/png_icons/profile.png'


const HeaderSection = () => {
  let leftValueToCenterContainer = (Dimensions.get("window").width - 300) / 2;
  return (
    <View style={styles.container}>
      <View style={styles.userInformation}>
        <Text style={styles.text}>Hola José</Text>

      </View>
      <Image style={{
        ...styles.icon,
        right: leftValueToCenterContainer
      }} source={star}></Image>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 190
  },
  userInformation: {
    marginTop: 73,
  },
  text: {
    color: "#333333",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal"

  },
  icon: {
    width: 21,
    height: 20,
    position: "absolute",
    marginTop: 73,
  },
});

export default HeaderSection;
