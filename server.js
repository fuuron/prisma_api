import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { title, content } = req.body;
  const posts = await prisma.Post.create({
    data: {
      title: title,
      content: content,
    },
  });
  return res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
