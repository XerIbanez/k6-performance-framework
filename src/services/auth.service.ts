import http from 'k6/http';
import { BASE_URL, PASSWORD, PATH, USERNAME, } from '../config/env.js';

export function login(): string {
  const payload = JSON.stringify({
    email: USERNAME,
    password: PASSWORD,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/${PATH}`, payload, params);

  // Debug (optional)
  console.log(`Login response: ${res.status} - ${res.body}`);

  const token = res.json('token');

  if (!token || typeof token !== 'string') {
    throw new Error(`Login failed: ${res.status} - ${res.body}`);
  }

  return token;
}