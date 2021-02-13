import axios from 'axios';
import { FETCH_DATA } from '../actions/types';
import store from '../store/store'

export const DataApi = async (list: string[]) => {
  const run: (requests: string[], responses: any[], i?: number) => any = async (
    requests,
    responses,
    i = 0,
  ) => {
    if (requests.length === 0) {
      return responses;
    }
    const currentRequest = requests[0];
    const newp = requests.filter((item, index) => {
      return index != 0;
    });
    try {
      const res = await axios.get(currentRequest);
      if (res.status == 200) {
        
        responses.push({ res, i ,status:200});
        store.dispatch({
          type: FETCH_DATA,
          payload: {
            data: res,
            index: i,
            status:200
          },
        });
        return run(newp, responses, ++i);
      }
      throw 'data not resolved';
    } catch (e) {
      store.dispatch({
        type: FETCH_DATA,
        payload: {
          status: 404,
          index:i
        },
      });      
      responses.push({
        res: false,
        i,
        status: 404,
      });
      return run(newp, responses, ++i);
    }
  };
  const result = run(list, []);
  return result;
};
