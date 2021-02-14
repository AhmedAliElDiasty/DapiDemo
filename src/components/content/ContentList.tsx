import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DataInterface } from '../../interfaces/DataInterface';
import ContentItem from './ContentItem';

interface Props {
  data: DataInterface[];
}

export default (props: Props) => {
  return (
    <FlatList
      contentContainerStyle={{backgroundColor:'white'}}
      data={props.data}
      renderItem={({ item }) => {
        return <ContentItem item={item} />;
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
