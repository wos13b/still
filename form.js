var box = document.getElementById("box-text")
var btn_login = document.getElementById("btn-login")

var cont = 0

btn_login.addEventListener("click",click_login)

function click_login(){

    cont ++
    var fm = document.forms[0]
    box.innerText = fm.elements[cont].value

}