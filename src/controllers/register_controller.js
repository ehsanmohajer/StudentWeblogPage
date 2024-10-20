'use strict';
/**
 *
 * @param {object} req for request obj
 * @param {object} res for response obj
 */
const renderRegister = (req, res) =>{
    res.render('./pages/register');
}

module.exports = {
    renderRegister
}
