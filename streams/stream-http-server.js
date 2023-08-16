import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = -1 * Number(chunk.toString());
    console.log(transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}

const server = http.createServer((request, response) => {
  return request
    .pipe(new InverseNumberStream())
    .pipe(response);
});

server.listen(3334, () => {
  console.log('Stream server is running!');
});