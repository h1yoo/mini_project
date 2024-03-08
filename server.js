const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const usersFilePath = path.join(__dirname, "server", "users.json");

// JSON파일에서 유저 데이터를 읽기위한 함수
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
// 유저 데이터를 JSON파일에 쓰기위한 함수
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
      res.status(200).json({ message: "로그인 성공" });
    } else {
      res
        .status(401)
        .json({ error: "비밀번호 혹은 이메일이 일치하지 않습니다." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
