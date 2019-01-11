import mongoose from 'mongoose';

const Schmea = mongoose.Schema;

const userSchema = new Schmea({
  name: {
    type: String,
    required: "Name is required"
  },
  email: {
    type: String,
    lowercase: true,
    required: "Email is required"
  },
  password: {
    type: String,
    required: "Password is required"
  }
});

const User = mongoose.model("User", userSchema);

export default User;
