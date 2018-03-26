import server from './server';

server.listen(3000, () => {
  console.log('app started');
});

if (module.hot) {
  module.hot.addStatusHandler(status => {
    if (status === 'abort' || status === 'fail') {
      process.exit(7);
    }
  });
}
