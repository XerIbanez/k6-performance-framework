import http from 'k6/http';
import { BASE_URL } from '../config/env.js';

export function getPosts(token: string) {
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const res = http.get(`${BASE_URL}/posts`, params);

  // Debug (optional)
  console.log(`GetPosts response: ${res.status}`);

  return res;
}