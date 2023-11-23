
const poliza = document.getElementById("poliza").value;
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarPoliza();
    console.log("enviado");

});

 const validarPoliza = () => {

    if (poliza.length < 3) {
        document.getElementById("Poliza-error").innerHTML = `<p style="color:red;">
                                                                El campo debe tener al menos 3 caracteres</p>`;
        return false;
    } else {
        return true;
    }

}
