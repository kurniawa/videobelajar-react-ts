import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;

  // Contoh seeding data users dengan password dan phone_number
  await prisma.user.createMany({
    data: [
      {
        email: 'user1@example.com',
        name: 'User 1',
        password: await hash('password1', saltRounds),
        phone_number: '08123456789',
      },
      {
        email: 'user2@example.com',
        name: 'User 2',
        password: await hash('password2', saltRounds),
        phone_number: '08987654321',
      },
      {
        email: 'user3@example.com',
        name: 'User 3',
        password: await hash('password3', saltRounds),
        phone_number: '08777777777',
      },
    ],
  });

  await prisma.user.create({
    data: {
        email: 'user1@example.com',
        name: 'User 1',
        password: await hash('password1', saltRounds),
        phone_number: '08123456789',
    }
    
  });

  console.log('Seeding selesai.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });