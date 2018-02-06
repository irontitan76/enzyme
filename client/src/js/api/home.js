import { headers, parseJSON } from './utils';

export function loadArticles(email, password, name) {
  const options = {
    headers: headers(),
    method: 'GET',
  };

  return fetch('/api/feeds', options)
    .then(parseJSON);
}
