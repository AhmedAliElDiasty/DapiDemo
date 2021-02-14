import React, { useEffect, useState } from 'react';
import { ContentHeader, ContentList } from '../components';
import { completeUrls, urls } from '../urls/urls';
import perfix from '../utils/perfix';
import { DataApi } from '../services/DataApi';
import { DataInterface } from '../interfaces/DataInterface';
import { useWindowDimensions, View } from 'react-native';
import { styles } from './styles';

interface Props {
  startPressed: boolean;
}

export default (props: Props) => {
  const list: DataInterface[] = []
  urls.map((item) => {
    list.push({ name: item });
  });
  const [data, setData] = useState<DataInterface[]>(list)
  const run: (requests: string[], responses: any[], index: number) => any = async (
    requests,
    responses,
    index,
  ) => {
    const localData = data
    if (requests.length === 0) {
      return responses;
    }
    const currentRequest = requests[0];
    const newRequests = requests.filter((item, index) => {
      return index != 0;
    });
    try {
      const res = await DataApi(currentRequest);
      localData[index] = {
        name: currentRequest.slice(12),
        response: res.data.length,
        index,
        logo: `${perfix.favPerfix}${currentRequest.slice(12)}`,
        status: 200,
      };

    } catch (e) {
      localData[index] = {
        name: currentRequest.slice(12),
        index,
        status: 404,
      };
    } finally {
      setData([...localData])
      return run(newRequests, responses, ++index);
    }
  };



  useEffect(() => {
    async function getData() {
      await run(completeUrls, [], 0);

    }
    if (props.startPressed) getData();
  }, [props.startPressed]);

  return (
    <View style={[styles.container,{height:useWindowDimensions().height}]}>
      <ContentHeader />
      <ContentList data={data} />
    </View>
  );
};
