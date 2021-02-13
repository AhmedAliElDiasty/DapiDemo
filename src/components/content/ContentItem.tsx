import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { DataInterface } from '../../interfaces/DataInterface';
import { styles } from './styles';

interface Props {
  item: DataInterface;
}

export default (props: Props) => {
  const { logo, response, name } = props.item;
  return (
    <>
      <View style={styles.itemContainer}>
        {logo? response ? (
          <Image source={{ uri: logo }} style={styles.image} />
        ) : (
            <Image source={require('../../assets/imgs/error.png')} style={styles.image} />
          ):null}
        <View>
          <Text style={styles.contentText}>{name}</Text>
          {response && (
            <Text style={styles.contentDetails}>{(response.length/1024).toFixed(1)} KB</Text>
          )}
        </View>
      </View>
      <View style={styles.borderView} />
    </>
  );
};
