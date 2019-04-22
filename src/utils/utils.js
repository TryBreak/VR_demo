import Qs from 'qs';

export const getUrlParam = param => {
  return Qs.parse(param, { ignoreQueryPrefix: true });
};
