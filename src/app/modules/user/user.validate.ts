import { z } from 'zod';
import { Role } from '@prisma/client';

export const userIdValidate = z.object({
  id: z.string(),
});

export const getAllUsersValidate = z.object({
  skip: z.string().default('1'),
  take: z.string().default('1'),
});

export const createUserValidate = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.enum([Role.USER, Role.ADMIN]),
});

export const updateUserValidate = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
});
