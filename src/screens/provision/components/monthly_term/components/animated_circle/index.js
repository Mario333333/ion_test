import React, { useEffect, useState } from 'react';


import {
  StyleSheet,
  View,
  Easing,
  Animated,
  LogBox
} from 'react-native';


const AnimatedCircle = (props) => {

  let spinValue = new Animated.Value(0)

  useEffect(() => {

    spin()
  }, [])

  const spin = () => {
    spinValue.setValue(0)
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,

      }
    ).start(() => spin())
  }

  const spinValues = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{ rotate: spinValues }]
      }}>

    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    width: 191,
    height: 191,
    borderWidth: 24,
    borderRadius: 191 / 2,
    borderColor: "#bb64c8",
    borderStartColor: "white"
  },

});

export default AnimatedCircle;
