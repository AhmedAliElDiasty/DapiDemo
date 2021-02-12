import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {styles} from './styles'

export default () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CONTENTS</Text>
    </View>
  )
}