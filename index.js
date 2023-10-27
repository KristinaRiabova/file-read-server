const http = require('http');
const fs = require('fs');

const port = 3000;
const bigFilePath = 'bigfile.txt';


const server = http.createServer((req, res) => {
  if (req.url === '/getSync') {

    try {
      const data = fs.readFileSync(bigFilePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(data);
      console.log('Synchronous reading complete');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading the file');
      console.error('Error in synchronous file reading');
    }
  } else if (req.url === '/getAsync') {
    // Asynchronously read the file
    fs.readFile(bigFilePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the file');
        console.error('Error in asynchronous file reading');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(data);
        console.log('Asynchronous reading complete');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

