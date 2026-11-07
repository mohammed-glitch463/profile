const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve CSS, JavaScript and images
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API status
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Mohammed Saif Portfolio API is running!"
    });
});

// 404
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});