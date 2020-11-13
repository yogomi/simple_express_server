import path from 'path';
import http from 'http';

import express from 'express';

const port = 32100;

const app = express();

// アドレスと関数のマッピング
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API の http(s)://{URL}/api/terminals/xxx/xxxg の例
import terminals from './terminals';
app.use('/api/terminals', terminals);

// 静的ファイル(生のHTML、cssや画像などを配置するフォルダの例
app.use('/static', express.static(path.join(__dirname, '../public/static')));

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bindingSocket = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bindingSocket}`);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bindingPort = `Port ${error.port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bindingPort} requires elevated privileges`);
      throw error;
    case 'EADDRINUSE':
      console.error(`${bindingPort} is already in use`);
      throw error;
    default:
      throw error;
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
