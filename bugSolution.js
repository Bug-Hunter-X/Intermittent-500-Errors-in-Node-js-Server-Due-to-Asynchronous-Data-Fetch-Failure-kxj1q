const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    const data = await fetchData();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

async function fetchData() {
  // Simulate asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Data fetched successfully');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});