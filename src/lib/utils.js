export const pluckDeep = key => obj =>
  key.split('.').reduce((accum, item) => accum[item], obj);
