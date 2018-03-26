import express from 'express';
import hello from './hello';

const app = express();

app.get('/', (...args) => hello(...args));

export default app;

if (module.hot) {
  module.hot.accept('./hello');
}
