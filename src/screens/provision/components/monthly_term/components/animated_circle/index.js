import Svg, {

  Circle,

} from 'react-native-svg';

import React, { useEffect, useState } from 'react';


import {
  StyleSheet,
  Dimensions,
  Easing,
  Animated,
} from 'react-native';

const { width } = Dimensions.get("window")
const size = 190
const strokeWidth = 24
const radius = (size - strokeWidth) / 2
const perimeter = 2 * (radius) * Math.PI
const AnimatedComponent = Animated.createAnimatedComponent(Circle)


const AnimatedCircle = (props) => {
  let rotateValue = new Animated.Value(0)
  const [startingPoint, setStartingPoint] = useState(0)
  const [finalPoint, setFinalPoint] = useState(Math.PI * 2)
  useEffect(() => {
    rotate()
  }, [])

  const rotate = () => {
    rotateValue.setValue(0)
    Animated.timing(
      rotateValue,
      {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
        easing: Easing.linear,
      }
    ).start(() => rotate())
  }
  const valuesToRotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startingPoint, finalPoint]
  })
  const strokeDashoffset = Animated.multiply(valuesToRotate, radius)
  return (
    <Svg height={size} width={size} >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(32, 161, 202, 0.14)"
        strokeWidth={strokeWidth / 2}
        strokeLinecap="round"
        strokeDasharray={`0.1, 48`}
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(32, 161, 202, 0.05)"
        strokeWidth={strokeWidth}

      />
      <AnimatedComponent
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#bb64c8"
        strokeDasharray={`${perimeter}`}
        strokeWidth={strokeWidth}
        {...{ strokeDashoffset }}
        rotation={0}

        strokeLinecap="round"
      />
    </Svg>
  );
};



export default AnimatedCircle;
