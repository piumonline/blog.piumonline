const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json("this is users");
})

module.exports = router;