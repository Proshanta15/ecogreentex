

const home = async (req, res) => {
  try {
    res.status(200).send('Welcome to the Auth Home Page');
  } catch (error) {
     console.error('Error in home controller:', error);
     res.status(500).send('Internal Server Error');
  }
}

export {home}