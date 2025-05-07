import { Router } from 'express';
import { loginValidate, registerValidate } from './auth.validate';
import {
  createUser,
  getExistsUser,
  getUserByEmail,
} from '@modules/user/user.service';
import {
  sendConflictResponse,
  sendCreatedResponse,
  sendNotFoundResponse,
  sendSuccessResponse,
  sendUnauthorizedResponse,
} from '@helpers/responseHandler';
import { generateToken } from './token.service';
import bcrypt from 'bcryptjs';

const router = Router();

/**
 * @route POST /auth/register
 * @desc Sign up
 * @body {name, email, phoneNumber, password, role}
 * @access Public
 */

router.post('/register', async (req, res, next) => {
  const body = registerValidate.parse(req.body);
  try {
    const existsUser = await getExistsUser(body.email, body.phoneNumber);

    if (existsUser) {
      if (existsUser.email === body.email) {
        sendConflictResponse(res, 'Email already exists');
        return;
      }

      if (existsUser.phoneNumber === body.phoneNumber) {
        sendConflictResponse(res, 'Phone number already exists');
        return;
      }
    }

    const result = await createUser(body);
    sendCreatedResponse(res, result);
  } catch (error) {
    next(error);
  }
});

/**
 * @route POST /auth/login
 * @desc Sign in
 * @body {email, password}
 * @access Public
 */
router.post('/login', async (req, res, next) => {
  const body = loginValidate.parse(req.body);
  try {
    const user = await getUserByEmail(body.email);

    if (!user) {
      sendNotFoundResponse(res, 'User not found');
      return;
    }

    const isPasswordValid = await bcrypt.compare(body.password, user?.password);

    if (!isPasswordValid) {
      sendUnauthorizedResponse(res, 'Invalid password');
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    const payload = {
      sub: user.id,
    };

    const accessToken = generateToken(payload);
    sendSuccessResponse(res, { user: userWithoutPassword, token: accessToken });
  } catch (error) {
    next(error);
  }
});

export default router;
