// validar dados de login, fazer requisicoes da api, redirecionar pra pagina de usuario

async function validateLogin() {
    const email = document.getElementById("email").value;
    
    const response = await fetch(`http://localhost:3333/users/${email}`);
    const data = await response.json();
    console.log(data);
    const password = document.getElementById("password").value;
    if(email === "" && password === "") {
        alert("Please, inform an email and password to login!"); 
    }else if (email === data.email && password === data.password) {
        window.location.href = "signon.html";
    } else if (email === data.email && password === "") {
        alert("Password not informed, please, type it!");
    } else if (email === data.email && password !== data.password) {
        alert("Incorrect password!")
    } else {
        alert("User not found!");
    };

};

   
document.addEventListener("DOMContentLoaded", function () {
});