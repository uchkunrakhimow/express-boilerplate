import { PrismaClient, Role } from '@prisma/client';
import hashPassword from '@helpers/bcryptPasswd';

const prisma = new PrismaClient();

export const createUser = async (data: {
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
  role?: Role;
}) => {
  const hashedPasswd = await hashPassword(data.password);
  return await prisma.user.create({
    data: {
      ...data,
      role: data.role || Role.USER,
      password: hashedPasswd,
    },
  });
};

export const getAllUsers = async ({
  skip,
  take,
}: {
  skip: number;
  take: number;
}) => {
  return await prisma.user.findMany({
    skip,
    take,
    omit: {
      password: true,
    },
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    omit: {
      password: true,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const getExistsUser = async (email?: string, phoneNumber?: string) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phoneNumber }],
    },
  });
};

export const updateUser = async (
  id: string,
  data: Partial<{
    name?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
  }>,
) => {
  if (data.password) {
    data.password = await hashPassword(data.password);
  }

  return await prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};
