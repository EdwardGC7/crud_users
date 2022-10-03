const express = require("express");
const app = express();
const userRouter = require('./users/users.router')

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Running!" });
});
 
app.use("/", userRouter)

app.listen(9000, () => {
  console.log("Current server using port 9000");
});

