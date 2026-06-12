
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
    console.log('Received registration data:', req.body);
    res.status(200).json({ message: 'Registration successful', data: req.body });
  } catch (error) {
    console.error('Error in register controller:', error);
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

export default { contact, home, register };
