import React, { useEffect, useState } from 'react';


import {
  View,
} from 'react-native';

import ProgressCircle from 'react-native-progress-circle'



const AnimatedCircle = (props) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setPercent(Math.floor(Math.random() * (100 - 1 + 1) + 1))
    }, 3000);
  }, [])

  return (
    <View >
      <ProgressCircle
        percent={percent}
        radius={191 / 2}
        borderWidth={24}
        color="#bb64c8"
        shadowColor="#e4f4fd"
        bgColor="#fff"
      >
      </ProgressCircle>

    </View>
  );
};



export default AnimatedCircle;
