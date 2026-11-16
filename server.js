const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let relativePath = cleanUrl === '/' ? 'index.html' : cleanUrl.replace(/^\/+/, '');
  let filePath = path.join(__dirname, decodeURIComponent(relativePath));

  // Security check to prevent path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Internal Server Error`);
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600'
        });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`AI Exam Master server listening on port ${PORT}`);
  console.log(`Access locally at http://localhost:${PORT}/`);
});
