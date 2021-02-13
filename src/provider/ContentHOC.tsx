import React, { useEffect, useState } from 'react';
import ContentList from '../components/content/ContentList';
import { DataInterface } from '../interfaces/DataInterface';
import { DataApi } from '../services/DataApi';
import urlprefix from '../utils/urlprefix';

interface Props {
  startPressed: boolean;
}

export default (props: Props) => {
  const [data, setData] = useState<DataInterface[]>([])
  const urls = [
    "apple.com",
    "spacex.com",
    "dapi.co",
    "facebook.com",
    "microsoft.com",
    "amazon.com",
    "boomsupersonic.com",
    "twitter.com"
  ]
  let tempData: DataInterface[] = [];
  const completeUrl: string[] = [];
  urls.forEach((val, index) => completeUrl[index] = `${urlprefix.perfix}${val}`);

  useEffect(() => {


    urls.map(item => {
      tempData.push({ name: item })
    })
    setData(tempData);
  }, [])
  useEffect(() => {
    async function getData() {
      await DataApi(completeUrl).then(res => res.map((item: any, index: number) => {
        tempData[index] = { name: urls[index], response: item.res?.data, logo: 'https://image.similarpng.com/thumbnail/2020/06/Logo-google-icon-PNG.png' }
        setData(tempData);
      }));
    }

    if (props.startPressed) getData();
  }, [props.startPressed])

  return (
    <ContentList data={data} />
  )
}