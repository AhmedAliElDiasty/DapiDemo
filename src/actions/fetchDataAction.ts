import { FETCH_DATA } from './types'


export function fetchDataAction(data:any) {
  return {
    type: FETCH_DATA,
    payload: { data }
  };
}
