import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles'

interface Props{
  handleStart: Function;
}

export default (props:Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{props.handleStart()}}>
        <Text style={styles.textStyle}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}