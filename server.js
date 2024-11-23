const path = require("path");
const os = require("os");
const dbPath = path.join(os.tmpdir(), "db.json");

// Ensure db.json is copied to /tmp
const fs = require("fs");
fs.copyFileSync("./db.json", dbPath);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
