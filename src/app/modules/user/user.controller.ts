import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getExistsUser,
  getUserById,
  updateUser,
} from './user.service';
import {
  sendConflictResponse,
  sendCreatedResponse,
  sendNoContentResponse,
  sendNotFoundResponse,
  sendSuccessResponse,
} from '@helpers/responseHandler';
import {
  createUserValidate,
  getAllUsersValidate,
  updateUserValidate,
  userIdValidate,
} from './user.validate';
const router = Router();

/**
 * @route POST /user
 * @desc Create user
 * @body {name, email, phoneNumber, password, role}
 * @access Public
 */
router.post('/user', async (req, res, next) => {
  const body = createUserValidate.parse(req.body);
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
 * @route GET /user
 * @desc Get all users
 * @query {skip, take}
 * @access Public
 */
router.get('/user', async (req, res, next) => {
  const query = getAllUsersValidate.parse(req.query);
  try {
    const result = await getAllUsers({
      skip: Number(query.skip),
      take: Number(query.take),
    });
    sendSuccessResponse(res, result);
  } catch (error) {
    next(error);
  }
});

/**
 * @route GET /user/:id
 * @desc Get user by id
 * @params {id}
 * @access Public
 */
router.get('/user/:id', async (req, res, next) => {
  const param = userIdValidate.parse(req.params);
  try {
    const user = await getUserById(param.id);

    if (!user) {
      sendNotFoundResponse(res, 'User not found');
      return;
    }

    const result = await getUserById(param.id);
    sendSuccessResponse(res, result);
  } catch (error) {
    next(error);
  }
});

/**
 * @route PUT /user/:id
 * @desc Update user by id
 * @params {id}
 * @access Public
 */
router.put('/user/:id', async (req, res, next) => {
  const param = userIdValidate.parse(req.params);
  const body = updateUserValidate.parse(req.body);
  try {
    const user = await getUserById(param.id);

    if (!user) {
      sendNotFoundResponse(res, 'User not found');
      return;
    }

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

    const result = await updateUser(param.id, body);
    sendSuccessResponse(res, result);
  } catch (error) {
    next(error);
  }
});

/**
 * @route DELETE /user/:id
 * @desc Delete user by id
 * @params {id}
 * @access Public
 */
router.delete('/user/:id', async (req, res, next) => {
  const param = userIdValidate.parse(req.params);
  try {
    const user = await getUserById(param.id);

    if (!user) {
      sendNotFoundResponse(res, 'User not found');
      return;
    }

    await deleteUser(param.id);
    sendNoContentResponse(res);
  } catch (error) {
    next(error);
  }
});

export default router;
