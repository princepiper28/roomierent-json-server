const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Apply default middlewares (logger, static, cors & no-cache)
server.use(middlewares);

// Parse JSON request body
server.use(jsonServer.bodyParser);

// Enable full CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

// Use the router (db.json endpoints)
server.use(router);

// Start the server
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`RoomieRent JSON Server is running on port ${PORT}`);
});
