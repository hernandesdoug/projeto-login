// validar dados de login, fazer requisicoes da api, redirecionar pra pagina de usuario

async function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginData  = {
        email: email,
        password: password
    };
    try{
        const response = await fetch("http://localhost:3333/users/login",{
            method:  "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(loginData)

        });
        if(response.ok){
            const data = await response.json();
            window.location.href = "signon.html"; 
            console.log(data);
        }else {
            const errorData = await response.json();
            console.error("Login failed", errorData.message);
            alert(errorData.message);
        }
    } catch(error){
        console.error("Unexpected error!");
    }
};   
document.addEventListener("DOMContentLoaded", function () {
});