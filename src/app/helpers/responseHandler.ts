import { type Response } from 'express';
import HttpStatusCode from './HttpStatusCode';

// Success response with data
export const sendSuccessResponse = <T>(
  res: Response,
  data: T,
  status = HttpStatusCode.OK,
) => {
  res.status(status).json({ success: true, data });
};

// Created response
export const sendCreatedResponse = <T>(
  res: Response,
  data: T,
  status = HttpStatusCode.CREATED,
) => {
  res.status(status).json({ success: true, data });
};

// Error response
export const sendErrorResponse = <T>(
  res: Response,
  message: T,
  status = HttpStatusCode.INTERNAL_SERVER_ERROR,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// Not Found response
export const sendNotFoundResponse = <T>(
  res: Response,
  message: T,
  status = HttpStatusCode.NOT_FOUND,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// Validation Error response
export const sendValidationError = <T>(
  res: Response,
  message: T,
  errors: string[],
  status = HttpStatusCode.BAD_REQUEST,
) => {
  res.status(status).json({
    success: false,
    error: {
      message: message,
      errors: errors,
    },
  });
};

// Unauthorized response
export const sendUnauthorizedResponse = (
  res: Response,
  message = 'Unauthorized',
  status = HttpStatusCode.UNAUTHORIZED,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// Forbidden response
export const sendForbiddenResponse = (
  res: Response,
  message = 'Forbidden',
  status = HttpStatusCode.FORBIDDEN,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// Bad Request response
export const sendBadRequestResponse = <T>(
  res: Response,
  message: T,
  status = HttpStatusCode.BAD_REQUEST,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// Conflict response
export const sendConflictResponse = <T>(
  res: Response,
  message: T,
  status = HttpStatusCode.CONFLICT,
) => {
  res.status(status).json({ success: false, error: { message } });
};

// No content response
export const sendNoContentResponse = (
  res: Response,
  status = HttpStatusCode.NO_CONTENT,
) => {
  res.sendStatus(status);
};

// Expired response
export const sendExpiredResponse = (
  res: Response,
  status = HttpStatusCode.GONE,
) => {
  res.sendStatus(status);
};
