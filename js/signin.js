// validar dados de login, fazer requisicoes da api, redirecionar pra pagina de usuario
async function validateLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3333/users");
    const dataLogin = await response.json();

    console.log(dataLogin);

    dataLogin.forEach((item) => {
        if (email === "" && password === "") {
            alert("Please, type a valid email and password!");
        }else if (email === item.email && password === item.password) {
            window.location.href = "signon.html";
        }else if(email === item.email && password === ""){
            alert("Password not informed, please, type it!");
        }else if(email === item.email && password !== item.password){
            alert("Incorrect password!")
        }else {
            alert("User not found!");
        };
    });  
};    
document.addEventListener("DOMContentLoaded", function() {
});