// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const PORT = 4009;

// // ✅ Correct path for `users.json` inside `backend/models/`
// const usersFilePath = path.join(__dirname, "..", "models", "users.json");

// // ✅ Ensure `users.json` exists
// if (!fs.existsSync(usersFilePath)) {
//     fs.writeFileSync(usersFilePath, JSON.stringify([]), "utf8");
// }

// // ✅ Serve static files from frontend
// app.use(express.static(path.join(__dirname, "..", "..", "frontend")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Create Router
// const router = express.Router();

// // ✅ Serve `index.html` from frontend
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "..", "frontend", "index.html"));
// });

// // ✅ Register Route
// router.post("/register", (req, res) => {
//     const { username, email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).send("Error: All fields are required");
//     }

//     // Read existing users
//     fs.readFile(usersFilePath, "utf8", (err, data) => {
//         if (err) {
//             console.error("Error reading users.json:", err);
//             return res.status(500).send("Error: Could not read user data");
//         }

//         let users = [];
//         try {
//             users = JSON.parse(data);
//         } catch (parseErr) {
//             console.error("Error parsing users.json:", parseErr);
//             users = [];
//         }

//         // Check if user already exists
//         if (users.some(user => user.email === email)) {
//             return res.status(400).send("Error: User already exists");
//         }

//         // Add new user
//         users.push({ username, email, password });

//         // Save updated users
//         fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8", (writeErr) => {
//             if (writeErr) {
//                 console.error("Error saving user data:", writeErr);
//                 return res.status(500).send("Error: Could not save user data");
//             }

//             // ✅ Redirect to `index2.html`
//             res.redirect("/index2.html");
//         });
//     });
// });

// // ✅ Login Route
// router.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).send("Error: All fields are required");
//     }

//     // Read existing users
//     fs.readFile(usersFilePath, "utf8", (err, data) => {
//         if (err) {
//             console.error("Error reading users.json:", err);
//             return res.status(500).send("Error: Could not read user data");
//         }

//         let users = [];
//         try {
//             users = JSON.parse(data);
//         } catch (parseErr) {
//             console.error("Error parsing users.json:", parseErr);
//             users = [];
//         }

//         const user = users.find(user => user.email === email && user.password === password);

//         if (!user) {
//             return res.status(400).send("Error: No such user found");
//         }

//         // ✅ Redirect to `index2.html`
//         res.redirect("/index2.html");
//     });
// });

// // Use the router
// app.use("/", router);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const router = express.Router();

// // Correct path for `users.json` in `models/`
// const usersFilePath = path.join(__dirname, "..", "models", "users.json");

// // Ensure `users.json` exists
// if (!fs.existsSync(usersFilePath)) {
//   fs.writeFileSync(usersFilePath, JSON.stringify([]), "utf8");
// }

// // Register Route
// router.post("/register", (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).send("Error: All fields are required");
//   }

//   // Read existing users
//   fs.readFile(usersFilePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading users.json:", err);
//       return res.status(500).send("Error: Could not read user data");
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       console.error("Error parsing users.json:", parseErr);
//       users = [];
//     }

//     // Check if user already exists
//     if (users.some(user => user.email === email)) {
//       return res.status(400).send("Error: User already exists");
//     }

//     // Add new user
//     users.push({ username, email, password });

//     // Save updated users
//     fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8", (writeErr) => {
//       if (writeErr) {
//         console.error("Error saving user data:", writeErr);
//         return res.status(500).send("Error: Could not save user data");
//       }

//       res.redirect("/index2.html");
//     });
//   });
// });

// // Login Route
// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send("Error: All fields are required");
//   }

//   // Read existing users
//   fs.readFile(usersFilePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading users.json:", err);
//       return res.status(500).send("Error: Could not read user data");
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       console.error("Error parsing users.json:", parseErr);
//       users = [];
//     }

//     const user = users.find(user => user.email === email && user.password === password);

//     if (!user) {
//       return res.status(400).send("Error: No such user found");
//     }

//     res.redirect("/index2.html");
//   });
// });

// module.exports = router;


const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Correct path for `users.json` in `models/`
const usersFilePath = path.join(__dirname, "..", "models", "users.json");

// Ensure `users.json` exists
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]), "utf8");
}

// Register Route
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "Error: All fields are required" });
  }

  // Read existing users
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      return res.status(500).json({ success: false, message: "Error: Could not read user data" });
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing users.json:", parseErr);
      users = [];
    }

    // Check if user already exists
    if (users.some(user => user.email === email && user.password === password)) {
      return res.status(400).json({ success: false, message: "Error: User already exists" });
    }

    // Add new user
    users.push({ username, email, password });

    // Save updated users
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8", (writeErr) => {
      if (writeErr) {
        console.error("Error saving user data:", writeErr);
        return res.status(500).json({ success: false, message: "Error: Could not save user data" });
      }

      res.json({ success: true, message: "User registered successfully!" });
    });
  });
});

// Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Error: All fields are required" });
  }

  // Read existing users
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      return res.status(500).json({ success: false, message: "Error: Could not read user data" });
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
      return res.status(400).json({ success: false, message: "Error: No such user found" });
    }

    // res.json({ success: true, message: "Login successful!" });
    // res.json({ success: true, redirect: "/index2.html" });
    res.json({ success: true, redirect: "/dashboard" });


  });
});

module.exports = router;
