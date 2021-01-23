import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import Movement from './components/movement'
import car from '../../../../utils/images/movements_images/car.jpg'
import cfe from '../../../../utils/images/movements_images/cfe.jpg'
import netflix from '../../../../utils/images/movements_images/netflix.jpg'
import shoppingCar from '../../../../utils/images/movements_images/shopping-car.jpg'


const MovementsSection = () => {
  const [dataMovements, setDataMovements] = useState(
    [{
      id: "1",
      title: "Auto",
      subTitle: "Mis logros",
      image: car,
      time: "2m",
      amount: "$ 350,000.00"
    },
    {
      id: "2",
      title: "CFE",
      subTitle: "Pago de servicio",
      image: cfe,
      time: "ayer",
      amount: "$ 280.00"
    },
    {
      id: "3",
      title: "Netflix",
      subTitle: "Suscripciones",
      image: netflix,
      time: "28 de dic",
      amount: "$ 140.00"
    },
    {
      id: "4",
      title: "Soriana Parque Delta",
      subTitle: "Pago",
      image: shoppingCar,
      time: "26 de dic",
      amount: "$ 500.00"
    },

    ]
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textMovements}>Tus movimientos</Text>
        <Text style={styles.textSeeAll}>Ver todos</Text>
      </View >
      <ScrollView style={styles.containerMovements}>
        {
          dataMovements.map((item) => <Movement key={item.id} item={item} />)
        }

      </ScrollView>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    top: 186,
    display: "flex",
    flexDirection: "column",
  },
  containerMovements: {
    top: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textMovements: {
    color: "#333333",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal"
  },
  textSeeAll: {
    color: "#22a8d2",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal"
  }
});

export default MovementsSection;
