import axios from 'axios';
import {FETCH_DATA} from '../actions/types';
import store from '../store/store';
import perfix from '../utils/perfix';

export const DataApi = async (list: string[]) => {
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
      const res = await axios.get(currentRequest);
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
