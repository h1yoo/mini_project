const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const usersFilePath = path.join(__dirname, "server", "users.json");

// Function to read user data from the file
const readUserData = async () => {
  try {
    const data = await fs.readFile(usersFilePath);
    return JSON.parse(data);
  } catch (error) {
    // File might not exist initially
    return [];
  }
};

// Function to write user data to the file
const writeUserData = async (userData) => {
  await fs.writeFile(usersFilePath, JSON.stringify(userData, null, 2));
};

// Registration endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, number, address } = req.body;

    // Read existing user data from the file
    const users = await readUserData();

    // Check if the user with the same email already exists
    if (users.some((user) => user.email === email)) {
      return res
        .status(400)
        .json({ error: "이미 존재하는 이메일 주소입니다." });
    }

    // Add new user data
    const newUser = { email, password, number, address };
    users.push(newUser);

    // Write the updated user data back to the file
    await writeUserData(users);

    res.status(201).json({ message: "회원가입 성공하였습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Read existing user data from the file
    const users = await readUserData();

    // Find the user by email
    const user = users.find((user) => user.email === email);

    // Check if the user exists and the password matches
    if (user && user.password === password) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
