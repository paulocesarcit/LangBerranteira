module.exports = function (code) {
    return code.match(/((#.*include.*)|(system)|(popen)|(fopen)|(fgets)|(execl))/g)
}
