import jwt, { type JwtPayload } from 'jsonwebtoken';

export const generateToken = (payload: JwtPayload) => {
  const secret = process.env['JWT_SECRET']!;
  return jwt.sign(payload, secret, { expiresIn: '30d' });
};
