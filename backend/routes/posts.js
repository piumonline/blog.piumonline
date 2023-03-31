const express = require('express');
const router = express.Router();
const db = require('../db');


//get all posts
router.get('/', (req,res)=>{
    const q = "SELECT * FROM posts"
    db.query(q,(err,data)=>{
        if(err) return res.send(err);
        return res.status(200).json(data);
    })
})
//get single post
router.get('/:id', (req,res)=>{
    const q =
    "SELECT * FROM myblogsite.posts WHERE id = ?"
    // "SELECT `title`, `desc`, `img`, FROM posts WHERE id = "
    // "SELECT p.id, `firstName`, `lastName`, `title`, `desc`, p.img, FROM user u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
    })
})
//post
router.post('/', (req,res)=>{
    res.json("this is post");
})
//delete
router.delete('/:id', (req,res)=>{
    res.json("this is post");
})
//update
router.put('/:id', (req,res)=>{
    res.json("this is post");
})

module.exports = router;