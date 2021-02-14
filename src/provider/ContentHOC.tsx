import React, { useEffect } from 'react';
import { ContentHeader, ContentList } from '../components';
import { useSelector } from 'react-redux';
import { completeUrls } from '../urls/urls';
import axios from 'axios';
import {FETCH_DATA} from '../actions/types';
import store from '../store/store';
import perfix from '../utils/perfix';
import { DataApi } from '../services/DataApi';

interface Props {
  startPressed: boolean;
}

export default (props: Props) => {
  const fetchedData: any = useSelector((state) => state);
  

  const fetchData = async (list: string[]) => {
    let data = store.getState().fetchData.data;
    const run: (requests: string[], responses: any[], index: number) => any = async (
      requests,
      responses,
      index,
    ) => {
      if (requests.length === 0) {
        return responses;
      }
      const currentRequest = requests[0];
      const newRequests = requests.filter((item, index) => {
        return index != 0;
      });
      try {
        const res = await DataApi(currentRequest);
        data[index] = {
          name: currentRequest.slice(12),
          response: res.data.length,
          index,
          logo: `${perfix.favPerfix}${currentRequest.slice(12)}`,
          status: 200,
        };
      } catch (e) {
        data[index] = {
          name: currentRequest.slice(12),
          index,
          status: 404,
        };
      } finally {
        store.dispatch({
          type: FETCH_DATA,
          payload: {
            data,
          },
        });
        return run(newRequests, responses, ++index);
      }
    };
    const result = run(list, [], 0);
    return result;
  };
  

  useEffect(() => {
    async function getData() {
      await fetchData(completeUrls);
      
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
