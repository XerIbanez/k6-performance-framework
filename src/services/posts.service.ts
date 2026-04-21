import http from 'k6/http';
import { BASE_URL, POST_PATH } from '../config/env.js';

export function getPosts(token: string) {
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const res = http.get(`${BASE_URL}/${POST_PATH}`, params);

  // Debug (optional)
  console.log(`GetPosts response: ${res.status}`);

  return res;
}