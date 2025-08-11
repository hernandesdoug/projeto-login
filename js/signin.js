// validar dados de login, fazer requisicoes da api, redirecionar pra pagina de usuario
async function validaLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3333/users");
    const dataLogin = await response.json();

    console.log(dataLogin);

    dataLogin.forEach((item) => {
        if (email === "" && password === "") {
            alert("Preencha os campos!");
        }else if (email === item.email && password === item.password) {
            window.location.href = "signon.html";
        }else if(email === item.email && password === ""){
            alert("Senha não digitada, digite a senha!");
        }else if(email === item.email && password !== item.password){
            alert("Senha incorreta!")
        }else {
            alert("Usuario não cadastrado!");
        };
    });  
};    
document.addEventListener("DOMContentLoaded", function() {
});