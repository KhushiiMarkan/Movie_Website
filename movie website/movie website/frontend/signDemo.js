const http = require('http');
const qs = require('querystring');
const path = require('path');
const fs = require('fs');

// Helper function to serve static files
function serveStaticFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading ${filePath}:`, err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

// Function to get the content type for different files
function getContentType(filePath) {
    const extname = path.extname(filePath).toLowerCase();
    switch (extname) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.png': return 'image/png';
        case '.gif': return 'image/gif';
        case '.svg': return 'image/svg+xml';
        default: return 'application/octet-stream';
    }
}

// Create the server
const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Serve `index2.html` for the root route
    if (method === 'GET' && url === '/') {
        const filePath = path.join(__dirname, 'index2.html');
        serveStaticFile(filePath, getContentType(filePath), res);
        return;
    }

    // Serve static files for CSS, JS, images, etc.
    if (method === 'GET' && (url.endsWith('.css') || url.endsWith('.js') || url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif') || url.endsWith('.svg'))) {
        const filePath = path.join(__dirname, url);
        serveStaticFile(filePath, getContentType(filePath), res);
        return;
    }

    // Handle user registration
    if (method === 'POST' && url === '/register') {
        let body = '';

        // Collect data chunks
        req.on('data', (chunk) => {
            body += chunk;
        });

        // Process data after receiving all chunks
        req.on('end', () => {
            const userData = qs.parse(body);
            const { username, password, email } = userData;

            // Validate required fields
            if (!username || !password || !email) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error: All fields are mandatory');
                return;
            }

            // Format user data
            const userInfo = `Username: ${username}\nPassword: ${password}\nEmail: ${email}\nRegistered At: ${new Date().toISOString()}\n\n`;

            // Save data to the file
            fs.appendFile('users.txt', userInfo, (err) => {
                if (err) {
                    console.error('Error saving user data:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error: Could not save user data');
                    return;
                }

                // Respond with the index2.html file
                const filePath = path.join(__dirname, 'index2.html');
                serveStaticFile(filePath, getContentType(filePath), res);
            });
        });

        // Handle error during data reception
        req.on('error', (err) => {
            console.error('Error during request:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Could not process the request');
        });

        return;
    }

    // Handle unsupported routes or methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

// Start the server
server.listen(4009, () => {
    console.log('Server listening on http://localhost:4009');
});
