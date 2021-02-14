import axios from 'axios';

export const DataApi = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (e) {
    throw 'Data not resolved';
  }
};
