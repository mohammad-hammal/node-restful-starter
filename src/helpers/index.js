import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const generateToken = (id, email, expiryDate) => {
  return jsonwebtoken.sign({ id, email }, process.env.JWT_KEY, {
    expiresIn: "1h"
  });
};

export const asyncMethod = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
