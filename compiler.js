module.exports = function (code) {
    const checkCode = require('./checkCode')
    const convertCode = require('./convert')
    const convertedCode = convertCode(code)
    if(checkCode(convertCode)){
        console.log(convertCode)
        //send this to excecute execute(convertedCode)
    } else {
        //mensagem de erro
        //termina
    }
}