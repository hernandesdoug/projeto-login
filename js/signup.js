// cadastrar os campos de usuario, validar campos, fazer requisicoes api.
async function formUser(event) {
    event.preventDefault();
    const fullName = document.getElementById("full-name").value;
    const dateBirth = document.getElementById("date-birth").value;
    const nationality = document.getElementById("select-nat").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const documentType = document.getElementById("select-doc").value;
    const cfPassword = document.getElementById("cf-password").value;

    try{
        const response = await fetch("http://localhost:3333/users",{
            method:  "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                fullName,
                email,
                dateBirth,
                phoneNumber,
                password,
                cfPassword,
                nationality,    
            documentType})
        });
        if(response.ok){
            const data = await response.json();
            console.log(data);
            localStorage.clear();
            const id = data.id;
            const url = `signon.html?id=${id}`;
            window.location.href = url;          
        }else {
            const errorData = await response.json();
            console.error("Login failed", errorData.message);
            alert(errorData.message);
        }
    } catch(error){
        console.error("Unexpected error!", error);
    }
};

function cancelForm(event){
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
});