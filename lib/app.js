import staticRoute from './static.js';

const app = async (req, res) => {
  const routes = await staticRoute(req);
  if(routes) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'plain/text');
    res.end(routes);
  }
};

export default app;
