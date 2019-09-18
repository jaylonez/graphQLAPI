import http from "http";
import app from "./app";
const port = process.env.PORT || 3456;
const server = http.createServer(app);
server.listen(port);
//# sourceMappingURL=index.js.map