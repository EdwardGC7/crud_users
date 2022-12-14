const express = require("express");
const app = express();
const userRouter = require('./users/users.router');

app.use(express.json());
app.use("/", userRouter);


app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Running!" });
});
 

app.listen(9000, () => {
  console.log("Current server using port 9000");
});

