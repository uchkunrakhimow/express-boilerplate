import { z } from 'zod';
import { Role } from '@prisma/client';

export const registerValidate = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string().optional(),
  password: z.string(),
  role: z.enum([Role.USER, Role.ADMIN]),
});

export const loginValidate = z.object({
  email: z.string(),
  phoneNumber: z.string().optional(),
  password: z.string(),
});
