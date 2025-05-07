import hashPassword from '@helpers/bcryptPasswd';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await hashPassword('@admin');
  const userPassword = await hashPassword('@user');

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Test Admin',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Test User',
      email: 'user@example.com',
      password: userPassword,
      role: 'USER',
    },
  });

  console.log('Seed data added successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
