window.onload = mostrarTablaHistorica();

function mostrarEnFahrenheit() {
  let valorCelsius = parseInt(document.getElementById("cajaCelsius").value);
  let valorConvertido = valorCelsius * 1.8 + 32;
  document.getElementById("cajaFah").value = valorConvertido;

  Swal.fire("El Valor convertido en Fahrenheit es: " + valorConvertido);

  let objeto = {};
  objeto.valorCelsius = valorCelsius.toFixed(1);
  objeto.valorFah = valorConvertido.toFixed(1);

  let valores = [];
  if (localStorage.getItem("valores")) {
    valores = JSON.parse(localStorage.getItem("valores"));
  }

  valores.push(objeto);
  localStorage.setItem("valores", JSON.stringify(valores));

  mostrarTablaHistorica();
}

function mostrarTablaHistorica() {
  let div = document.getElementById("valoresHis");
  let html = "";
  if (localStorage.length > 0) {
    let elementos = JSON.parse(localStorage.getItem("valores"));

    for (let i = 0; i < elementos.length; i++) {
      objetoElemento = elementos[i];
      html +=
        "Grados Celsius: " +
        objetoElemento.valorCelsius +
        " | Grados Fahrenheit: " +
        objetoElemento.valorFah +
        "<br/>";
    }

    div.innerHTML = html;
  }

  let valoresHoy;
  //fetch('http://worldtimeapi.org/api/timezone/America/Santiago')
  //.then(valoresHoy = response => response.json())

  fetch('http://worldtimeapi.org/api/timezone/America/Santiago')
  .then((response) => response.json())
  .then((data) => { document.getElementById("cajaHoy").value = data.datetime});
  

  

  

}
