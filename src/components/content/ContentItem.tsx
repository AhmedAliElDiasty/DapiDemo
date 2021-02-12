import axios from 'axios';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { DataInterface } from '../../interfaces/DataInterface';
import { styles } from './styles'

interface Props {
  item: DataInterface
}

export default (props: Props) => {
  const { logo, response, name } = props.item;
  return (
    <>
      <View style={styles.itemContainer}>
        {logo && <Image source={{ uri: logo }} style={styles.image} />}
        <View>
          <Text style={styles.contentText}>{name}</Text>
          {response && <Text style={styles.contentDetails}>{response}</Text>}
        </View>
      </View>
      <View style={styles.borderView} />
    </>
  )
}