var express = require('express');
var router = express.Router();
const model = require('../models/index');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/login', async function (req, res, next) {
  // Our login logic starts here
  try {
    // Get user input
    const {
      name,
      password
    } = req.body;

    // Validate user input
    if (!(name && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await  model.users.findOne({
      name
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({
          user_id: user._id,
          name
        },
        process.env.TOKEN_KEY, {
          expiresIn: "2h",
        }
      );

      res.status(201).json({
        'status': 'OK',
        'messages': 'login berhasil !',
        'data': user,
        'token': token
      });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

router.post("/register", async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const {
      name,
      email,
      password
    } = req.body;

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await model.users.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign({
        user_id: user._id,
        email
      },
      process.env.TOKEN_KEY, {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

module.exports = router;
