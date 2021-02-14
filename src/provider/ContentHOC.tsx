import React, { useEffect } from 'react';
import { ContentHeader, ContentList } from '../components';
import { DataApi } from '../services/DataApi';
import { useSelector } from 'react-redux';
import { completeUrls } from '../urls/urls';

interface Props {
  startPressed: boolean;
}

export default (props: Props) => {
  const fetchedData: any = useSelector((state) => state);

  useEffect(() => {
    async function getData() {
      await DataApi(completeUrls);
    }
    if (props.startPressed) getData();
  }, [props.startPressed]);

  return (
    <>
      <ContentHeader />
      <ContentList data={fetchedData.fetchData.data} />
    </>
  );
};
