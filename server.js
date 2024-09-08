import { handler } from './build/handler.js';
import express from 'express';

const app = express();

// SvelteKit의 빌드 결과물을 사용하여 모든 요청을 처리합니다.
app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});