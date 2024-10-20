console.log("Hi");
/**
 * @license MIT
 * @copyright 2024 EMK
 */

'use strict';

const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 4000 http://localhost:3000");
});
