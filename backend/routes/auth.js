const express = require('express');
const db = require('../db');
const router = express.Router();
var bcrypt = require('bcryptjs');

router.get("/register", (req, res) => {
    const q = "SELECT * FROM user";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});



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


module.exports = router;