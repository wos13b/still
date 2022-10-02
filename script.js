
const des = 0
var msg = document.getElementById("msg-send_input")
var info = document.getElementById("chat-info")
const btn_send = document.getElementById("msg-send_button")
var count = 0
var conf
const perfil = document.getElementById("Perfil-nav")
var chat = document.getElementById("chat")
btn_send.addEventListener('click',btn_click)
perfil.addEventListener('click', Perfil_toggle)

function Perfil_toggle(){

    var navegation = document.getElementById("container-config")
    navegation.classList.toggle('container-config_on')

}
function btn_click(){

    info.innerText = msg.value

}
/*do{

    if (count == 0){

        alert ("fim do programa")

    }
    else{

        alert ("O contador está em " + count + ", Quando chegar a 0 terminará o programa")

    }
    count --

}while(count >= 0)
*/

/*for (count=0; count <= 2; count++){

    conf = confirm("a variável count tem o valor " + count + " / 2 deseja continuar?")
    if( conf == false){

        break

    }

}

while (des == 0){

    conf = confirm("Deseja continuar?")
    if(conf == true){

        logo.innerText = count--

    }
    else{

        break

    }

}
*/


/*nome = ' '

nome = prompt("Digite seu nome")
logo = document.getElementById("logo")

if(nome == "wesley"){

    alert("bem vindo de volta")
    logo.innerText = "TECH"

}
else{

    alert(nome)

}
*/

/ARRAYS/
/*

push - adiciona no final
pop - remove o ultimo elemento
unshift - adiciona no inicio
shift - remove no inicio
splice - remove (local,quantidade)

    ex: itns.splice(3,1)

indexOf - localiza um objeto
sort - ordenação por ordem crescente
reverse - ordem decrescente
join - coloca o resultado em uma variavel
concat - concatena elementos de arrays
lenght - mostra o tamanho da array

*/

/*
logo = document.getElementById("logo")
var mochila=[];
var itens=["corda","lanterna","comida","corda","chave"];

    itens.push("madeira");
    itens.push("cabo");
    itens.push("lámina");
    mochila.push(itens[0])

logo.innerText = mochila

*/

/*

+=, -=, *=
++ = acrescenta mais um
-- = subtrai um

*/