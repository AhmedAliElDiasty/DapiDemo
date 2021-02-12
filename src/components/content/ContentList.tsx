import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { DataInterface } from '../../interfaces/DataInterface';
import ContentItem from './ContentItem';

interface Props {
  data: DataInterface[]
}


export default (props: Props) => {  
  return (
    <FlatList
      data={props.data}
      renderItem={data => <ContentItem item={data.item} />}
      />
  )
}