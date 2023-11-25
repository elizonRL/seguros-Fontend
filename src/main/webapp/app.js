

const poliza = document.getElementById("poliza");
const form = document.getElementById("form");
const button = document.getElementById("btn-enviar");
const errorElement = document.getElementById("Poliza-error");
const cardElement = document.getElementById("card");

let errorMessa = `<p style="color:red;"> Verifica Tu poliza de seguros </p>`;
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const request = await fetch(`http://localhost:8081/poliza?num_poliza=${poliza.value}`);
    const datos = await request.json();

    if (poliza.value === "" || poliza.value.length < 3 || !datos.length) {
        errorElement.innerHTML = errorMessa ;
        cardElement.innerHTML= "";
        poliza.value ="";
        return false;
    }
    dataProsesada(datos);
    errorElement.innerHTML = `<p style="color:green;"> Datos correctos</p>`;
    data(poliza.value);
    poliza.value="";
    return true;

    //resetar el formulario

});

const dataProsesada= (datos)=>{
    datos.forEach((element)=>{
      num_poliza = element["num_poliza"]
      fech_ini = element["fecha_inicio"]
      fech_fin = element["fecha_fin"];
      cliente = element["cliente"]
      vehiculos = element["vehiculos"]
      prima = element["prima"]
        tipo_poliza= element["tipo_poliza"]
        console.log(vehiculos.map((e)=> e["modelo"]), fech_ini, element
        )
    })
}

function validarPoliza() {
    if (poliza === "" || poliza.length < 3) {
        errorElement.innerHTML = `<p style="color:red;"> Datos incorrectos</p>`;
        return false;
    }
    return true;
}



const data = (poliza) => {
    cardElement.innerHTML =
        ` <div class="containerCadr">
            <div class="headerCard">
                <h1 class="title">Información de seguro</h1>
            </div>
            <div class="contentCard">
                <table class="tableCard">
                    <tr>
                        <th>Póliza</th>
                        <td>${num_poliza}</td>
                    </tr>
                    <tr>
                        <th>Tipo de Poliza</th>
                        <td>${tipo_poliza}</td>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <td>${cliente.nombre +" "+cliente.apellido}</td>
                    </tr>
                    <tr>
                        <th>Número de vehículos</th>
                        <td>${vehiculos.length}</td>
                    </tr>
                    <tr>
                        <th>Marca</th>
                        <td>${vehiculos.map((e)=> e["marca"])}</td>
                    </tr>
                    <tr>
                        <th>Modelo</th>
                        <td>${vehiculos.map((e)=> e["modelo"])}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Inicio</th>
                        <td>${fech_ini}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Finalización</th>
                        <td>${fech_fin}</td>
                    </tr>
                    <tr>
                        <th>Prima</th>
                        <td>${prima}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;
}