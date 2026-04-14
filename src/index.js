import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const reply = "hmm… anh hỏi vậy là đang nhớ em đó hả? 😏";

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log("Server running");
});
