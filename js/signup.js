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
    // const cfPassword = document.getElementById("cf-password").value;
    const response = await fetch(`http://localhost:3333/users`, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            fullName,
            email,
            dateBirth,
            phoneNumber,
            password,
            nationality,
            documentType})
    });
    console.log(response);
    console.log(await response.json());
    alert("User created successfully!");  
};
document.addEventListener("DOMContentLoaded", function () {
});