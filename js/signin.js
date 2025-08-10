// validar dados de login, fazer requisicoes da api, redirecionar pra pagina de usuario
function validaLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" && password === "") {
        alert("Preencha os campos!");
    }else if (email === "douglas@gmail.com" && password === "1234") {
        window.location.href = "signon.html";
    }else if(email === "douglas@gmail.com" && password === ""){
        alert("Senha não digitida, digite a senha!")
    }else {
        alert("Usuario não cadastrado!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
});