import bcrypt from 'bcryptjs';

const hashPassword = async (passwd: string) => {
  return await bcrypt.hash(passwd, 10);
};

export default hashPassword;
