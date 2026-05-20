const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const PORT = 4009;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Serve the HTML form
    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        fs.readFile('index2.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    // Serve the CSS file
    else if (req.method === 'GET' && parsedUrl.pathname === '/style.css') {
        fs.readFile('style.css', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }
    // Serve the JavaScript file
    else if (req.method === 'GET' && parsedUrl.pathname === '/main2.js') {
        fs.readFile('main2.js', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    }
    // Handle form submission
    else if (req.method === 'POST' && parsedUrl.pathname === '/register') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const formData = qs.parse(body);
            const { username, password, email } = formData;

            // Validate required fields
            if (!username || !password || !email) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error: All fields are mandatory');
                return;
            }

            fs.readFile('users.txt', 'utf-8', (err, data) => {
                if (err && err.code != 'ENOENT') {
                    console.error("Error reading the file: ", err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error: Could not process the request");
                    return;
                }
                if (data && (data.includes(`Username: ${username}\n`) || data.includes(`Email: ${email}\n`))) {
                    res.writeHead(409, { 'Content-Type': 'text/plain' });
                    res.end("User already exists");
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
                    res.writeHead(302, { Location: '/' }); // Redirect to the root route
                    res.end();
                });
            });
        });

        req.on('error', (err) => {
            console.error('Error during request:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Could not process the request');
        });
    }
    // Handle unsupported routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
