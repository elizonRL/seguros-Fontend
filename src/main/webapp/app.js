
const poliza = document.getElementById("poliza");
const form = document.getElementById("form");
const button = document.getElementById("btn-enviar");
const errorElement = document.getElementById("Poliza-error");
const cardElement = document.getElementById("card");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (poliza.value === "" || poliza.value.length < 3) {
        errorElement.innerHTML = `<p style="color:red;"> Verifica Tu poliza de seguros </p>`;
        return false;
    }
    console.log(poliza.value)
    errorElement.innerHTML = `<p style="color:green;"> Datos correctos</p>`;
    data(poliza.value, card);
    return true;

    //resetar el formulario

});

function validarPoliza() {
    if (poliza === "" || poliza.length < 3) {
        errorElement.innerHTML = `<p style="color:red;"> Datos incorrectos</p>`;
        return false;
    }
    console.log(poliza)
    return true;
}



const data = (poliza, card) => {
    cardElement.innerHTML =
        `<div class="card" style="width: 18rem;">
            <div class="card-body"> 
                <h5 class="card-title">Poliza</h5> 
                <p class="card-text"> ${poliza} </p> 
            </div> 
        </div>`;
}