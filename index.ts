// ESM版：ECMAScript Modules
import { PrismaClient } from "@prisma/client"; // ← importだけ使う

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    take: 10,
  });
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
