//>> Variables
let msg = '';
let code = '';
let display = document.getElementById('disp');

function btnEncode() {
    msg = document.getElementById("msg").value;
    console.log(msg);

    encodekro();

}

function encodekro() {

    for (let i = 0; i < msg.length; i++) {



        switch (msg[i]) {
            case 'a':
                msg = msg.split('');
                msg[i] = '1';
                msg = msg.join('');
                break;
            case 'b':
                msg = msg.split('');
                msg[i] = '2';
                msg = msg.join('');
                break;
            case 'c':
                msg = msg.split('');
                msg[i] = '3';
                msg = msg.join('');
                break;
            case 'd':
                msg = msg.split('');
                msg[i] = '4';
                msg = msg.join('');
                break;
            case 'e':
                msg = msg.split('');
                msg[i] = '5';
                msg = msg.join('');
                break;
            case 'f':
                msg = msg.split('');
                msg[i] = '6';
                msg = msg.join('');
                break;
            case 'g':
                msg = msg.split('');
                msg[i] = '7';
                msg = msg.join('');
                break;
            case 'h':
                msg = msg.split('');
                msg[i] = '8';
                msg = msg.join('');
                break;
            case 'i':
                msg = msg.split('');
                msg[i] = '9';
                msg = msg.join('');
                break;
                //-- Jugaar
            case 'j':
                msg = msg.split('');
                msg[i] = 'q';
                msg = msg.join('');
                break;
            case 'k':
                msg = msg.split('');
                msg[i] = 'w';
                msg = msg.join('');
                break;
            case 'l':
                msg = msg.split('');
                msg[i] = 'e';
                msg = msg.join('');
                break;
            case 'm':
                msg = msg.split('');
                msg[i] = 'r';
                msg = msg.join('');
                break;
            case 'n':
                msg = msg.split('');
                msg[i] = 't';
                msg = msg.join('');
                break;
            case 'o':
                msg = msg.split('');
                msg[i] = 'y';
                msg = msg.join('');
                break;
            case 'p':
                msg = msg.split('');
                msg[i] = 'u';
                msg = msg.join('');
                break;
            case 'q':
                msg = msg.split('');
                msg[i] = 'i';
                msg = msg.join('');
                break;
            case 'r':
                msg = msg.split('');
                msg[i] = 'o';
                msg = msg.join('');
                break;
            case 's':
                msg = msg.split('');
                msg[i] = 'p';
                msg = msg.join('');
                break;
                // -- pehli row khtm
            case 't':
                msg = msg.split('');
                msg[i] = 'a';
                msg = msg.join('');
                break;
            case 'u':
                msg = msg.split('');
                msg[i] = 's';
                msg = msg.join('');
                break;
            case 'v':
                msg = msg.split('');
                msg[i] = 'd';
                msg = msg.join('');
                break;
            case 'w':
                msg = msg.split('');
                msg[i] = 'f';
                msg = msg.join('');
                break;
            case 'x':
                msg = msg.split('');
                msg[i] = 'g';
                msg = msg.join('');
                break;
            case 'y':
                msg = msg.split('');
                msg[i] = 'h';
                msg = msg.join('');
                break;
            case 'z':
                msg = msg.split('');
                msg[i] = 'j';
                msg = msg.join('');
                break;
            case ' ':
                msg = msg.split('');
                msg[i] = 'X';
                msg = msg.join('');
                break;

        }
    }

    console.log('message after change => ', msg);
    display.style.color='red';
    display.innerHTML=msg;
}





function btnDecode(){
    
    code = document.getElementById("code").value;
    console.log(code);

    decodekro();


}
function decodekro(){
    for (let it = 0; it < code.length; it++) {
        
        switch (code[it]) {
            case '1':
                code = code.split('');
                code[it] = 'a';
                code = code.join('');
                break;
            case '2':
                code = code.split('');
                code[it] = 'b';
                code = code.join('');
                break;
            case '3':
                code = code.split('');
                code[it] = 'c';
                code = code.join('');
                break;
            case '4':
                code = code.split('');
                code[it] = 'd';
                code = code.join('');
                break;
            case '5':
                code = code.split('');
                code[it] = 'e';
                code = code.join('');
                break;
            case '6':
                code = code.split('');
                code[it] = 'f';
                code = code.join('');
                break;
            case '7':
                code = code.split('');
                code[it] = 'g';
                code = code.join('');
                break;
            case '8':
                code = code.split('');
                code[it] = 'h';
                code = code.join('');
                break;
            case '9':
                code = code.split('');
                code[it] = 'i';
                code = code.join('');
                break;
                //-- jugaar
            case 'q':
                code = code.split('');
                code[it] = 'j';
                code = code.join('');
                break;
            case 'w':
                code = code.split('');
                code[it] = 'k';
                code = code.join('');
                break;
            case 'e':
                code = code.split('');
                code[it] = 'l';
                code = code.join('');
                break;
            case 'r':
                code = code.split('');
                code[it] = 'm';
                code = code.join('');
                break;
            case 't':
                code = code.split('');
                code[it] = 'n';
                code = code.join('');
                break;
            case 'y':
                code = code.split('');
                code[it] = 'o';
                code = code.join('');
                break;
            case 'u':
                code = code.split('');
                code[it] = 'p';
                code = code.join('');
                break;
            case 'i':
                code = code.split('');
                code[it] = 'q';
                code = code.join('');
                break;
            case 'o':
                code = code.split('');
                code[it] = 'r';
                code = code.join('');
                break;
            case 'p':
                code = code.split('');
                code[it] = 's';
                code = code.join('');
                break;
            case 'a':
                code = code.split('');
                code[it] = 't';
                code = code.join('');
                break;
            case 's':
                code = code.split('');
                code[it] = 'u';
                code = code.join('');
                break;
            case 'd':
                code = code.split('');
                code[it] = 'v';
                code = code.join('');
                break;
            case 'f':
                code = code.split('');
                code[it] = 'w';
                code = code.join('');
                break;
            case 'g':
                code = code.split('');
                code[it] = 'x';
                code = code.join('');
                break;
            case 'h':
                code = code.split('');
                code[it] = 'y';
                code = code.join('');
                break;
            case 'j':
                code = code.split('');
                code[it] = 'z';
                code = code.join('');
                break;
            case 'X':
                code = code.split('');
                code[it] = ' ';
                code = code.join('');
                break;
        
        }
        
    }
    display.style.color='green';
    display.innerHTML=code;
}

