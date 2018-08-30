import User from '../models/User';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { showValidationErrors } from '../helpers';
import { generateToken } from '../helpers';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({
      message: "This user is created before"
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hashPassword
  });

  await user.save();

  res.status(200).json({
    message: `user with name ${user.name} created successfully`
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "email or password not right"
    });
  }

  const authSuccess = await bcrypt.compare(password, user.password);
  if (authSuccess) {
    const token = generateToken(user._id, email);
    res.status(200).json({access_token: token});
  }
};

export const getData = async (req, res) => {
  const user = req.currentUser;
  res.json(user);
};
