const router = require('express').Router();
const { Users } = require('../../models');
const auth = require('../../utils/auth')

//logs user in and adds session data
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await Users.findOne({ where: { email: req.body.email } });
    

//     if (!userData) {
//       res.status(400);
//       res.json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);
//     console.log(validPassword);
//     if (!validPassword) {
//         res.status(400)
//         res.json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(401).json(err);
//   }
// });


router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    console.log(req.body.password)
// issue with the check password
    const validPassword = dbUserData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.number = dbUserData.number;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// logs user out and deletes the session cookie
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// // creates a new user
// router.post('/', (req, res) => {
//   Users.create({
//     username: req.body.username,
//     email: req.body.email,
//     number: req.body.number,
//     password: req.body.password,

//   })
//   .then(dbUserData => {
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.number = dbUserData.number;
//       req.session.loggedIn = true;
  
//       res.json(dbUserData);
//     });
//   });
// });

//adds new user to database
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

