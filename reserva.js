var chat_info = document.getElementById("chat-info")
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

var mes_ex = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")

var horas = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

chat_info.innerText = (horas-12) + " : " + minutos + " : " + segundos