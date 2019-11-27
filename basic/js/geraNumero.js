var botao = $("#gera-numero");

$(function() {
    protocol = window.sessionStorage.getItem("protocol");
    console.log("O seu número de protocolo é: ", protocol);
    
});

botao.one("click",function(event) {
    if (window.sessionStorage.getItem("protocol") === null ) {
        window.sessionStorage.setItem("protocol", geraProtocolo());
    }   
});

function geraProtocolo() {
    var date = new Date();
    return ("0" + date.getDate()).substr(-2)+("0" + (date.getMonth() + 1)).substr(-2)+date.getFullYear()+new Date().getTime();
}