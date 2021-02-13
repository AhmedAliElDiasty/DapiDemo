import axios from 'axios';

export const DataApi = async (list: string[]) => {
  const run: (p: string[], r: any[], i?: number) => any = async (
    p,
    r,
    i = 0,
  ) => {
    if (p.length === 0) {
      return r;
    }
    const p1 = p[0];
    const newp = p.filter((item, index) => {
      return index != 0;
    });
    try {
      const res = await axios.get(p1);
      if (res.status == 200) {
        r.push({res, i});
        return run(newp, r, ++i);
      }
      throw 'data not resolved';
    } catch (e) {
      r.push({
        res: false,
        i,
      });
      return run(newp, r, ++i);
    }
  };
  const result = run(list, []);
  return result;
};
