const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth')
const express = require('express');
var cors = require('cors')

var app = express();
const PORT = 8800;

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT,()=>{console.log(`app listen in ${PORT}`)});