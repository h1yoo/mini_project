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

// 회원가입 endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, number, address } = req.body;

    // 기존 유저 데이터 읽어오기
    const users = await readUserData();

    // 이메일 중복체크
    if (users.some((user) => user.email === email)) {
      return res
        .status(400)
        .json({ error: "이미 존재하는 이메일 주소입니다." });
    }

    // 새로운 유저 데이터 추가
    const newUser = { email, password, number, address };
    users.push(newUser);

    // 새로운 유저 데이터 파일에 쓰기
    await writeUserData(users);

    res.status(201).json({ message: "회원가입 성공하였습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 로그인 Endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 유저 데이터 읽어오기
    const users = await readUserData();

    // 이메일로 유저 찾기
    const user = users.find((user) => user.email === email);

    // 유저의 이메일과 비밀번호가 일치하는지 체크
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
