import { User } from '../models/User.js';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js';

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
};

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'User already exists' });

    const user = await User.create({ email, password });
    res.status(201).json({
      message: 'User registered',
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({
      message: 'Login successful',
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};
