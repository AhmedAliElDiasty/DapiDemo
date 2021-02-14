import React from 'react';
import { View, Text, Image } from 'react-native';
import { DataInterface } from '../../interfaces/DataInterface';
import { styles } from './styles';

interface Props {
  item: DataInterface;
}

export default (props: Props) => {
  const { logo, response, name, status } = props.item;
  const renderImage = () => {
    if (status == 200) return (
      <Image source={{ uri: logo }} style={styles.image} />
    )
    else if (status == 404) return (
      <Image source={require('../../assets/imgs/error.png')} style={styles.image} />
    )
  }
  return (
    <>
      <View style={styles.itemContainer}>
        {status && renderImage()}
        <View>
          <Text style={styles.contentText}>{name}</Text>
          {response && (
            <Text style={styles.contentDetails}>{(response / 1024).toFixed(1)} KB</Text>
          )}
        </View>
      </View>
      <View style={styles.borderView} />
    </>
  );
};
