import { login } from '../services/auth.service.js';
import { getPosts } from '../services/posts.service.js';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% under 500ms
    http_req_failed: ['rate<0.01'],   // <1% errors
  },
};

export default function () {
  const token = login();

  const res = getPosts(token);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}