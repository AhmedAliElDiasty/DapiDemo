import React, {useEffect, useState} from 'react';
import ContentList from '../components/content/ContentList';
import {DataInterface} from '../interfaces/DataInterface';
import {DataApi} from '../services/DataApi';
import perfix from '../utils/perfix';
import {useSelector} from 'react-redux';

interface Props {
  startPressed: boolean;
}

export default (props: Props) => {
  const [data, setData] = useState<DataInterface[]>([]);
  const urls = [
    'apple.com',
    'spacex.com',
    'dapi.co',
    'facebook.com',
    'microsoft.com',
    'amazon.com',
    'boomsupersonic.com',
    'twitter.com',
  ];
  let tempData: DataInterface[] = [];
  const completeUrl: string[] = [];
  urls.forEach(
    (val, index) => (completeUrl[index] = `${perfix.urlPerfix}${val}`),
  );

  const fetchedData: any = useSelector((state) => state);

  useEffect(() => {
    urls.map((item) => {
      tempData.push({name: item});
    });
    setData(tempData);
  }, []);

  useEffect(() => {
    const {index, status, favIcon} = fetchedData.fetchData;

    const length = fetchedData.fetchData.data?.data?.length;
    tempData = data;
    tempData[index] = {
      name: urls[index],
      response: status == 200 ? length : null,
      logo: `${perfix.favPerfix}${urls[index]}`,
      status: status,
    };
  }, [fetchedData]);

  useEffect(() => {
    async function getData() {
      const res = await DataApi(completeUrl);
        res.map((item: any, index: number) => {
            tempData[index] = {
              name: urls[index],
              response: item.status == 200 ? item.res.data.length : null,
              logo: `${perfix.favPerfix}${urls[index]}`,
              status: item.status,
            };
          setData(tempData);
        })
      
    }
    if (props.startPressed) getData();
  }, [props.startPressed]);

  return <ContentList data={data} />;
};
