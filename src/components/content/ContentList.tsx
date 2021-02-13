import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {DataInterface} from '../../interfaces/DataInterface';
import ContentItem from './ContentItem';

interface Props {
  data: DataInterface[];
}

export default (props: Props) => {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <ContentItem item={item} />;
      }}
      keyExtractor={(item) => item.name}
      extraData={data}
    />
  );
};
