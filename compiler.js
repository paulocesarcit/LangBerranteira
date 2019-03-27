module.exports = function (code) {
    const convertCode = require('./convert')
    const convertedCode = convertCode(code)
    console.log(convertCode)
    //send this to excecute execute(convertedCode)
}