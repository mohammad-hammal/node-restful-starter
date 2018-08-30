import User from '../models/User';
import jsonwebtoken from 'jsonwebtoken';

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({
      message: "No Access Token Provided"
    });
    return;
  }
  const token = req.headers.authorization;
  const decoded = jsonwebtoken.verify(token, process.env.JWT_KEY);
  const { _id, name, email } = await User.findOne({ email: decoded.email });
  req.currentUser = { _id, name, email };
  next();
};

export default auth;