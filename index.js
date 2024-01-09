const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors middleware
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Use the cors middleware
server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
