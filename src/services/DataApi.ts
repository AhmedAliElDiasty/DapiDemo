import axios from 'axios';

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
        responses.push({res, i});
        return run(newp, responses, ++i);
      }
      throw 'data not resolved';
    } catch (e) {
      responses.push({
        res: false,
        i,
      });
      return run(newp, responses, ++i);
    }
  };
  const result = run(list, []);
  return result;
};
