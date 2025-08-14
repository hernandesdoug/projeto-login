// recuperar data do usuario, para alteracao e delecao.
let id = "";
async function updateProfile(event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const dateBirth = document.getElementById("date-birth").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;
    const nationality = document.getElementById("nationality").value;
    const documentType = document.getElementById("document-type").value;
    
    try {
        const response = await fetch(`http://localhost:3333/users/${id}`, {
    
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            fullName, email, dateBirth, phoneNumber,
            password, nationality, documentType
        })
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data.response);
        alert("User updated successfully!")
    } else {
        const errorData = await response.json();
        console.error("Failed to update user!", errorData.message);
        alert(errorData.message);
    }
    } catch (error) {
        console.error("Unexpected error!", error);
    }   
}
async function deleteProfile(event) {
    event.preventDefault();
    try {
        const response = await fetch(`http://localhost:3333/users/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.response);
            window.location.href = "index.html"; 
            alert("User deleted successfully!")
        } else {
            const errorData = await response.json();
            console.error("Failed to delete user!", errorData.message);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Unexpected error!",error);
    }
}
async function logoutProfile(event) {
    localStorage.clear();
    window.location = "index.html";
}
async function recoverProfile() {
    try {
        const response = await fetch(`http://localhost:3333/users/${id}`);

        if (response.ok) {
            const data = await response.json();
            const fullName = document.getElementById("full-name");
            fullName.value = data.fullName;
            const email = document.getElementById("email");
            email.value = data.email;
            const dateBirth = document.getElementById("date-birth");
            dateBirth.value = data.dateBirth;
            const phoneNumber = document.getElementById("phone-number");
            phoneNumber.value = data.phoneNumber;
            const password = document.getElementById("password");
            password.value = data.password;
            const nationality = document.getElementById("nationality");
            nationality.value = data.nationality;
            const documentType = document.getElementById("document-type");
            documentType.value = data.documentType;
            console.log(data);
        } else {
            const errorData = await response.json();
            console.error("Failed to recover data!", errorData.message);
            alert(errorData.message);
        }
    } catch (error) {
        console.error("Unexpected error!", error);
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("id");
    id = param;
    console.log(id);
    recoverProfile();
});