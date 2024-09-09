
document.getElementById("registro").addEventListener("click", function() {
    window.location.href = "../pages/human_singup.html"; 
});

document.getElementById("iniciarSesion").addEventListener("click", function() {
    let usuario = document.getElementById("username").value.trim();
    const usuarios = {
        "Admin": "../pages/admin_role_page.html",
        "Humana": "../pages/human_role_page.html",
        "Compania": "../pages/RolEmpresa.html"
    };

    // Redirigir a la página correspondiente si el usuario está en el mapa
    if (usuarios[usuario]) {
        window.location.href = usuarios[usuario];
    } else {
        alert("Usuario no reconocido"); // Notificar al usuario si no se encuentra en el mapa
    }
});