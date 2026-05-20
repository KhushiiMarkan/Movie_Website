

// // ✅ SERVER.JS (or app.js)

// const express = require("express");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// const PORT = 4009;



// // ✅ Set view engine and views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // ✅ Use CORS for frontend connection
// app.use(cors({
//   origin: "http://127.0.0.1:4000",
//   methods: "GET,POST",
//   allowedHeaders: "Content-Type"
// }));

// // ✅ Middleware for parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Logger middleware
// const logger = require("./middlewares/logger");
// app.use(logger);

// // ✅ Serve static files (CSS/JS/images)
// app.use(express.static(path.join(__dirname, "..", "frontend")));

// // ✅ Routes

// // 1️⃣ Home page with Sign In button
// app.get("/", (req, res) => {
//   res.render("index"); // views/index.ejs
// });

// // 2️⃣ Login Page
// app.get("/login", (req, res) => {
//   res.render("login"); // views/login.ejs
// });

// // 3️⃣ Register Page
// app.get("/register", (req, res) => {
//   res.render("sign_up"); // views/sign_up.ejs
// });

// // 4️⃣ Dashboard (after login or signup)
// app.get("/dashboard", (req, res) => {
//   res.render("index2"); // views/index2.ejs
// });

// // ✅ Error handler middleware
// const errorHandler = require("./middlewares/errorHandling");
// app.use(errorHandler);

// // ✅ Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });





const express = require("express");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4009;

// Middleware
app.use(bodyParser.json());
app.use(compression());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later."
});
app.use(limiter);

// Serve static frontend files (JS, CSS, images)
app.use(express.static(path.join(__dirname, "..", "frontend")));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const apiRoutes = require("./api/apiRoutes");
app.use("/api", apiRoutes);

// Pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("sign_up");
});

app.get("/dashboard", (req, res) => {
  res.render("index2");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
