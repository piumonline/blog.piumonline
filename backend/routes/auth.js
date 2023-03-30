const express = require('express');
const db = require('../db');
const router = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");



// router.get("/register", (req, res) => {
//     const q = "SELECT * FROM user";
//     db.query(q, (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.json(err);
//         }
//         return res.json(data);
//     });
// });


//register
router.post('/register', async (req, res) => {
    try {
        const s = "SELECT * FROM user WHERE email = ? "

        const data = await db.query(s, [req.body.email], (err, data) => {
            if (err) {
                return res.json(sql_errors.error);
            }

            if (data.length) {
                return res.status(409).json("user already exists");
            } else {
                //hash the pwd
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);

                //insert/registrer new user
                const q = "INSERT INTO user(`firstname`,`lastname`,`email`,`password`) VALUES (?)";
                const values = [
                    req.body.firstname,
                    req.body.lastname,
                    req.body.email,
                    hash,
                ]

                db.query(q, [values], (err, data) => {
                    if (err) return res.send(err);
                    return res.json(data);
                })
            }
        });
    }
    catch (err) {
        console.log(err);
        return res.json(err);
    }
})


//login
router.post('/login', async(req,res)=>{
    //CHECK USER

  const q = "SELECT * FROM user WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
})


module.exports = router;