import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {
  sendExpiredResponse,
  sendForbiddenResponse,
  sendUnauthorizedResponse,
} from '@helpers/responseHandler';

/**
 * @desc Token verify
 * @headers {Bearer}
 */

const verifyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  const secret = process.env['JWT_SECRET']!;

  if (!token) {
    sendUnauthorizedResponse(res, 'Access token is missing');
    return;
  }

  jwt.verify(token, secret, (err, _payload) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        sendExpiredResponse(res);
        return;
      }
      sendForbiddenResponse(res, 'Invalid token');
      return;
    }
    next();
  });
};

export default verifyMiddleware;
