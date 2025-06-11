// // const http = require('http');
// // let qs = require('querystring');
// // const path = require('path');
// // const fs = require('fs');

// // let server = http.createServer((req, res) => {
// //     if (req.method === 'GET' && req.url === '/style.css') {
// //         const cssFilePath = path.join(__dirname, 'style.css'); // Get file path from URL
// //         fs.readFile(cssFilePath, 'utf8', (err, data) => {
// //             if (err) {
// //                 console.error('Error reading CSS file:', err);
// //                 res.writeHead(404, { 'Content-Type': 'text/plain' });
// //                 res.end('CSS file not found');
// //                 return;
// //             }

// //             res.writeHead(200, { 'Content-Type': 'text/css' });
// //             res.end(data);
// //         });
// //         return; // End the function here to avoid further handling
// //     }
// //     if (req.method === 'POST' && req.url === '/register') {
// //         let body = '';

// //         // Collect data chunks
// //         req.on('data', (chunk) => {
// //             body += chunk;
// //         });

// //         // Process data after receiving all chunks
// //         req.on('end', () => {
// //             let userData = qs.parse(body);
// //             let username = userData.username;
// //             let password = userData.password;
// //             let email = userData.email;

// //             // Validate required fields
// //             if (!username || !password || !email) {
// //                 res.writeHead(400, { 'Content-Type': 'text/plain' });
// //                 res.end('Error: All fields are mandatory');
// //                 return;
// //             }

// //             // Format user data
// //             const userInfo = `Username: ${username}\nPassword: ${password}\nEmail: ${email}\nRegistered At: ${new Date().toISOString()}\n\n`;

// //             // Save data to the file
// //             fs.appendFile('users.txt', userInfo, (err) => {
// //                 if (err) {
// //                     console.error('Error during registration:', err);
// //                     res.writeHead(500, { 'Content-Type': 'text/plain' });
// //                     res.end('Error: Could not save user data');
// //                     return;
// //                 }
// //                 const filePath = path.join(__dirname, 'index.html');
// //                 fs.readFile(filePath,'utf-8', (err, data) => {
// //                     if (err) {
// //                         console.error('Error reading index.html:', err);
// //                         res.writeHead(500, { 'Content-Type': 'text/plain' });
// //                         res.end('Error: Could not load index.html');
// //                         return;
// //                     }

// //                 // Respond with success
// //                 res.writeHead(200, { 'Content-Type': 'text/html' });
// //                 res.end(data);
// //             });
// //         });
// //     });
// //         // Handle error during data reception
// //         req.on('error', (err) => {
// //             console.error('Error during request:', err);
// //             res.writeHead(500, { 'Content-Type': 'text/plain' });
// //             res.end('Error: Could not process the request');
// //         });
// //     }
        
// //  else {
// //         // Handle unsupported routes or methods
// //         res.writeHead(404, { 'Content-Type': 'text/plain' });
// //         res.end('404 Not Found');
// //     }
// // });

// // // Start the server
// // server.listen(3002, () => {
// //     console.log('Server listening on port 3002');
// // });



// const http = require('http');
// const qs = require('querystring');
// const path = require('path');
// const fs = require('fs');

// // Helper function to serve static files
// function serveStaticFile(filePath, contentType, res) {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.error(`Error reading ${filePath}:`, err);
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('404 Not Found');
//             return;
//         }
//         res.writeHead(200, { 'Content-Type': contentType });
//         res.end(data);
//     });
// }

// // Function to get the content type for different files
// function getContentType(filePath) {
//     const extname = path.extname(filePath).toLowerCase();
//     switch (extname) {
//         case '.html': return 'text/html';
//         case '.css': return 'text/css';
//         case '.js': return 'application/javascript';
//         case '.jpg':
//         case '.jpeg': return 'image/jpeg';
//         case '.png': return 'image/png';
//         case '.gif': return 'image/gif';
//         case '.svg': return 'image/svg+xml';
//         default: return 'application/octet-stream';
//     }
// }

// // Create the server
// const server = http.createServer((req, res) => {
//     const { method, url } = req;

//     // Serve `index.html` for the root route
//     if (method === 'GET' && url === '/') {
//         const filePath = path.join(__dirname, 'index2.html');
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }

//     // Serve `style.css`
//     if (method === 'GET' && url === '/style.css') {
//         const filePath = path.join(__dirname, 'style.css');
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }
//     if (method === 'GET' && url.endsWith('main2.js')) {
//         const filePath = path.join(__dirname, url);
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }

//     // Serve image files (e.g., jpg, png, gif, svg)
//     if (method === 'GET' && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif') || url.endsWith('.svg'))) {
//         const filePath = path.join(__dirname, url);  // This assumes images are in the root folder or correct subfolders
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }

//     // Handle user registration
//     if (method === 'POST' && url === '/register') {
//         let body = '';

//         // Collect data chunks
//         req.on('data', (chunk) => {
//             body += chunk;
//         });

//         // Process data after receiving all chunks
//         req.on('end', () => {
//             const userData = qs.parse(body);
//             const { username, password, email } = userData;

//             // Validate required fields
//             if (!username || !password || !email) {
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.end('Error: All fields are mandatory');
//                 return;
//             }

//             // Format user data
//             const userInfo = `Username: ${username}\nPassword: ${password}\nEmail: ${email}\nRegistered At: ${new Date().toISOString()}\n\n`;

//             // Save data to the file
//             fs.appendFile('users.txt', userInfo, (err) => {
//                 if (err) {
//                     console.error('Error saving user data:', err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Error: Could not save user data');
//                     return;
//                 }

//                 // Respond with the index.html file
//                 const filePath = path.join(__dirname, 'index2.html');
//                 serveStaticFile(filePath, getContentType(filePath), res);
//             });
//         });

//         // Handle error during data reception
//         req.on('error', (err) => {
//             console.error('Error during request:', err);
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error: Could not process the request');
//         });

//         return;
//     }

//     // Handle unsupported routes or methods
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
// });

// // Start the server
// server.listen(3004, () => {
//     console.log('Server listening on http://localhost:3004');
// });

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 4009;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (req.method === 'GET' && pathname === '/') {
        // Serve the HTML file
        fs.readFile('index2.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'GET' && pathname === '/style.css') {
        // Serve the CSS file
        fs.readFile('style.css', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS File Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else if (req.method === 'GET' && pathname === '/main2.js') {
        // Serve the JavaScript file
        fs.readFile('main2.js', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('JavaScript File Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if (req.method === 'GET') {
        // Serve image files or other static assets
        const filePath = path.join(__dirname, pathname); // Resolve file path
        const ext = path.extname(filePath).toLowerCase(); // Get file extension

        // Map file extensions to content types
        const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream'; // Default content type

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    } else {
        // Handle unsupported routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
