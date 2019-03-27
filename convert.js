module.exports = function (codeSB) {
    //a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro de aspas.
    var code = codeSB;

    if (code == null) return "";

    //MAIN
    code = code.replace(/(SO SERJ[AÃ]O BERRANTERO)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {'); 
    //}
    code = code.replace(/(PARA MEU BERRANTE TOCAR)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //PRINTF
    code = code.replace(/(MATADOR DE ONC(Ç)A[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //SCANF
    code = code.replace(/(AQUI TEM CORAGEM[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //IF
    code = code.replace(/(VERDADE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //ELSE
    code = code.replace(/(N[AÃ]O MINTO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //ELSE IF
    code = code.replace(/(ATIREI A PRIMEIRA[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //WHILE
    code = code.replace(/(TO AI FIRME)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //FOR
    code = code.replace(/(AQUI MEU AMIGO N(AÃ) TREMEU N(AÃ)O)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //DECLARAR FUNÇÃO
    code = code.replace(/(NOSSA SENHORA DE[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //RETORNO DE FUNÇÃO
    code = code.replace(/(MATA MATA)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //BREAK
    code = code.replace(/(MATEI A FERA)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //CONTINUE
    code = code.replace(/(DE CARA A CARA COM A PINTADA BRABA)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //TIPO DE DADOS 
    code = code.replace(/(BERRANTE)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(ON(ÇC)A)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(SHORT)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(LONG)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(PINTADA BRABA)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(FERA)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(DAQUELE JEITO)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    console.log ('COMPILADO: ');
    console.log (code);

    return code;
}