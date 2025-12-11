const express=require('express');
const cors=require('cors');
const path = require('path');
const fs = require('fs');
const app=express();
app.use(cors({origin:"*"}));
app.use(express.static('build'));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3001,()=>console.log('server started...at 3001'));