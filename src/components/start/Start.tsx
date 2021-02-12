import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {styles} from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}