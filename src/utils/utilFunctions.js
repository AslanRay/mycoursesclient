import { API_URL_V1 } from './constants';

export function setSessionStorage({ data, key }) {
  if (data && key) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}

export function getSessionStorage(key) {
  const data = sessionStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

export function serializeForUri(obj = {}) {
  return Object
    .keys(obj)
    .map((key) => `${encodeURI(key)}=${encodeURI(obj[key])}`)
    .join('&');
}

export function genApiUrl(path, params) {
  let serializedParams = serializeForUri(params);

  if (serializedParams) {
    serializedParams = `?${serializedParams}`;
  }

  return `${API_URL_V1}/${path}${serializedParams}`;
}

export async function apiCall(path, params = {}) {
  const url = genApiUrl(path, params.get);

  const token = getSessionStorage('sessionToken');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...params.headers,
    },
  };

  if (params.post) {
    options.method = 'POST';
    options.body = JSON.stringify(params.post);
  } else if (params.delete) {
    options.method = 'DELETE';
  } else if (params.patch) {
    options.method = 'PATCH';
    options.body = JSON.stringify(params.patch);
  }

  const response = await fetch(url, options);

  return response;
}
