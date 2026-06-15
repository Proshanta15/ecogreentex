import User from "../models/user-model.js";

// Home page controller
const home = async (req, res) => {
  try {
    res.status(200).send('Welcome to the Auth Home Page');
  } catch (error) {
    console.error('Error in home controller:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Registration page controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({ message: 'User registered successfully', token: await userCreated.generateToken(), userId: userCreated._id.toString() });
  } catch (error) {
    console.error('Error in register controller:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Login page controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({ message: 'Login successful', token: await userExist.generateToken(), userId: userExist._id.toString().toString() });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }

  } catch (error) {
    console.error('Error in login controller:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Contact page controller
const contact = async (req, res) => {
  try {
    res.status(200).send('Contact page');
  } catch (error) {
    console.error('Error in contact controller:', error);
    res.status(500).send('Internal Server Error');
  }
}

export default { contact, home, register, login };
