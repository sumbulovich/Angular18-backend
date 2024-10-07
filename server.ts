import app from "./src/app";

const server = app

server.get('/', function(req, res) {
  res.send('Hello World 2!');
});

server.post('/', function(req, res) {
  res.send({ status: 'Success', message: 'Hello World' });
});

server.listen(3000, function () {
  console.log('Listening on port 3000!');
});
