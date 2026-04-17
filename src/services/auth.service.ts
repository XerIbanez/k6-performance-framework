import http from 'k6/http';
import { BASE_URL } from '../config/env.js';

export function login(): string {
  const payload = JSON.stringify({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/api/login`, payload, params);

  // Debug (optional but useful)
  console.log(`Login response: ${res.status} - ${res.body}`);

  const token = res.json('token');

  if (!token || typeof token !== 'string') {
    throw new Error(`Login failed: ${res.status} - ${res.body}`);
  }

  return token;
}