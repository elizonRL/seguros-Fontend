

const poliza = document.getElementById("poliza");
const form = document.getElementById("form");
const button = document.getElementById("btn-enviar");
const errorElement = document.getElementById("Poliza-error");
const cardElement = document.getElementById("card");


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (poliza.value === "" || poliza.value.length < 3) {
        errorElement.innerHTML = `<p style="color:red;"> Verifica Tu poliza de seguros </p>`;
        return false;
    }
    const request = await fetch(`http://localhost:8081/poliza?num_poliza=123456`);
    const datos = await request.json();
    console.log(poliza.value); // {num_poliza: 123456, nombre: "Juan", apellido: "Perez"}
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
        ` <div class="containerCadr">
            <div class="headerCard">
                <h1 class="title">Información de seguro</h1>
            </div>
            <div class="contentCard">
                <table class="tableCard">
                    <tr>
                        <th>Póliza</th>
                        <td>AUTO12345678</td>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <th>Número de vehículos</th>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th>Modelo</th>
                        <td>Toyota Camry</td>
                    </tr>
                    <tr>
                        <th>Fecha de Inicio</th>
                        <td>10-10-2023</td>
                    </tr>
                    <tr>
                        <th>Fecha de Finalización</th>
                        <td>10-10-2024</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;
}