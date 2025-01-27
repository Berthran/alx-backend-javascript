const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response content type to plain text
  res.end('Hello Holberton School!'); // Send the response
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
