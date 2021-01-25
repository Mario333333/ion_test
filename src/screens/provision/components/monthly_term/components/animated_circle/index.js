import React, { useEffect, useState } from 'react';


import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

import ProgressCircle from 'react-native-progress-circle'



const AnimatedCircle = (props) => {

  let rotateValue = new Animated.Value(0)

  useEffect(() => {
    rotate()
  }, [])

  const rotate = () => {
    rotateValue.setValue(0)
    Animated.timing(
      rotateValue,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }
    ).start(() => rotate())
  }

  const valuesToRotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  return (<View >
    <Animated.View
      style={styles.circleShadow} />

    <Animated.View style={{
      ...styles.roatingCircle,
      transform: [{ rotate: valuesToRotate }]
    }} />

  </View>
  );
};


const styles = StyleSheet.create({

  circleShadow: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(32, 161, 202, 0.1)",
  },
  roatingCircle: {
    width: 190,
    height: 190,
    backgroundColor: "white",
    borderRadius: 95,
    borderWidth: 24,
    borderColor: "#bb64c8",
    borderEndColor: "transparent"
  },

});

export default AnimatedCircle;
