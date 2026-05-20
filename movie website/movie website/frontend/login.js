// const http = require("http");
// const qs = require("querystring");
// const path = require("path");
// const fs = require("fs");

// // File path for storing users
// const usersFilePath = path.join(__dirname, "users.json");

// // Ensure `users.json` exists
// if (!fs.existsSync(usersFilePath)) {
//     fs.writeFileSync(usersFilePath, JSON.stringify([]));
// }

// // Helper function to serve static files
// function serveStaticFile(filePath, contentType, res) {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.error(`Error reading ${filePath}:`, err);
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }
//         res.writeHead(200, { "Content-Type": contentType });
//         res.end(data);
//     });
// }

// // Function to get content type
// function getContentType(filePath) {
//     const extname = path.extname(filePath).toLowerCase();
//     switch (extname) {
//         case ".html":
//             return "text/html";
//         case ".css":
//             return "text/css";
//         case ".js":
//             return "application/javascript";
//         case ".jpg":
//         case ".jpeg":
//             return "image/jpeg";
//         case ".png":
//             return "image/png";
//         case ".gif":
//             return "image/gif";
//         case ".svg":
//             return "image/svg+xml";
//         default:
//             return "application/octet-stream";
//     }
// }

// // Create server
// const server = http.createServer((req, res) => {
//     const { method, url } = req;

//     // Serve `index2.html` for root route
//     if (method === "GET" && url === "/") {
//         const filePath = path.join(__dirname, "index2.html");
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }

//     // Serve static files (CSS, JS, images)
//     if (
//         method === "GET" &&
//         (url.endsWith(".css") ||
//             url.endsWith(".js") ||
//             url.endsWith(".jpg") ||
//             url.endsWith(".jpeg") ||
//             url.endsWith(".png") ||
//             url.endsWith(".gif") ||
//             url.endsWith(".svg"))
//     ) {
//         const filePath = path.join(__dirname, url);
//         serveStaticFile(filePath, getContentType(filePath), res);
//         return;
//     }

//     // Handle user registration
//     if (method === "POST" && url === "/register") {
//         let body = "";

//         // Collect data chunks
//         req.on("data", (chunk) => {
//             body += chunk;
//         });

//         // Process data after receiving all chunks
//         req.on("end", () => {
//             const userData = qs.parse(body);
//             const { username, password, email } = userData;

//             // Validate required fields
//             if (!password || !email) {
//                 res.writeHead(400, { "Content-Type": "text/plain" });
//                 res.end("Error: All fields are required");
//                 return;
//             }

//             // Read existing users
//             fs.readFile(usersFilePath, "utf8", (err, data) => {
//                 if (err) {
//                     console.error("Error reading users.json:", err);
//                     res.writeHead(500, { "Content-Type": "text/plain" });
//                     res.end("Error: Could not read user data");
//                     return;
//                 }

//                 let users = [];
//                 try {
//                     users = JSON.parse(data);
//                 } catch (parseErr) {
//                     console.error("Error parsing users.json:", parseErr);
//                     users = [];
//                 }

//                 // Check if user already exists
//                 if (users.some((user) => user.email === email)) {
//                     res.writeHead(400, { "Content-Type": "text/plain" });
//                     res.end("Error: User already exists");
//                     return;
//                 }

//                 // Add new user
//                 users.push({ username, email, password });

//                 // Save updated users list
//                 fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (writeErr) => {
//                     if (writeErr) {
//                         console.error("Error saving user data:", writeErr);
//                         res.writeHead(500, { "Content-Type": "text/plain" });
//                         res.end("Error: Could not save user data");
//                         return;
//                     }

//                     // Redirect to `index2.html`
//                     const filePath = path.join(__dirname, "index2.html");
//                     serveStaticFile(filePath, getContentType(filePath), res);
//                 });
//             });
//         });

//         // Handle error during data reception
//         req.on("error", (err) => {
//             console.error("Error during request:", err);
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Error: Could not process the request");
//         });

//         return;
//     }

//     // Handle unsupported routes or methods
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
// });

// // Start server
// server.listen(4009, () => {
//     console.log("🚀 Server listening on http://localhost:4009");
// });


// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 4009;
// const usersFilePath = path.join(__dirname, "users.json");

// // Ensure `users.json` exists
// if (!fs.existsSync(usersFilePath)) {
//     fs.writeFileSync(usersFilePath, JSON.stringify([]));
// }

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname)); // Serve static files

// // Function to read users from `users.json`
// const getUsers = () => {
//     try {
//         const data = fs.readFileSync(usersFilePath, "utf8");
//         return JSON.parse(data);
//     } catch (err) {
//         console.error("Error reading users.json:", err);
//         return [];
//     }
// };

// // Function to save users to `users.json`
// const saveUsers = (users) => {
//     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
// };

// // Serve `index2.html` for root route
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index2.html"));
// });

// // Handle user registration
// app.post("/register", (req, res) => {
//     const { username, email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).send("Error: All fields are required");
//     }

//     let users = getUsers();
//     if (users.some((user) => user.email === email)) {
//         return res.status(400).send("Error: User already exists");
//     }

//     users.push({ username, email, password });
//     saveUsers(users);

//     res.sendFile(path.join(__dirname, "index2.html"));
// });

// // Handle user login
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).send("Error: Email and password are required");
//     }

//     let users = getUsers();
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (!user) {
//         return res.status(400).send("Error: No such user found");
//     }

//     res.sendFile(path.join(__dirname, "index2.html"));
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 4009;

// ✅ Correct path for `users.json` inside `backend/models/`
const usersFilePath = path.join(__dirname, "..", "backend", "models", "users.json");

// ✅ Ensure `users.json` exists
if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]), "utf8");
}

// ✅ Serve `frontend` as static folder
app.use(express.static(path.join(__dirname, "..", "frontend")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create Router
const router = express.Router();

// Serve `index.html` from frontend
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

// ✅ Register Route (Saves Users Properly)
router.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Error: All fields are required");
    }

    // Read existing users
    fs.readFile(usersFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading users.json:", err);
            return res.status(500).send("Error: Could not read user data");
        }

        let users = [];
        try {
            users = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing users.json:", parseErr);
            users = [];
        }

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            return res.status(400).send("Error: User already exists");
        }

        // Add new user
        users.push({ username, email, password });

        // Save updated users
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8", (writeErr) => {
            if (writeErr) {
                console.error("Error saving user data:", writeErr);
                return res.status(500).send("Error: Could not save user data");
            }

            // ✅ Redirect to `index2.html`
            res.redirect("/index2.html");
        });
    });
});

// ✅ Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Error: All fields are required");
    }

    // Read existing users
    fs.readFile(usersFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading users.json:", err);
            return res.status(500).send("Error: Could not read user data");
        }

        let users = [];
        try {
            users = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing users.json:", parseErr);
            users = [];
        }

        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            return res.status(400).send("Error: No such user found");
        }

        // ✅ Redirect to `index2.html`
        res.redirect("/index2.html");
    });
});

// Use the router
app.use("/", router);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

