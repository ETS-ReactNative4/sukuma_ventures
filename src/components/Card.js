import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';


export default Card = (props) => {
  return (
    <View style={[styles.card, styles.rounded, styles.m2, styles.p2, props.cardStyles]}>
            {props.title ? <Text style={[props.textColor, styles.title, styles.p2]}>{props.title}</Text> : null}
            {props.body}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#C4C4C4'
  },
  card: {
    shadowRadius: 16,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: 'gray',
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
  rounded: {
    borderRadius: 8,
  },
  m2: {
    margin: 16
  },
  p2: {
    paddingHorizontal: 16
  }
});