window.onload = mostrarTablaHistorica()

function mostrarEnFahrenheit() {
  let valorCelsius = parseInt(document.getElementById("cajaCelsius").value);
  let valorConvertido = valorCelsius * 1.8 + 32;
  document.getElementById("cajaFah").value = valorConvertido;

  const map1 = new Map();

  map1.set("gradosC", valorCelsius)
  map1.set("gradosF", valorConvertido)

  arr = []
  arr.push(map1)

  console.log(arr)
  localStorage.setItem("valoresH", arr);
  
}

function mostrarTablaHistorica() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  let arregloStored = localStorage.getItem("valoresH")

  for (let indice = 0; indice < arregloStored.length; indice++){ 

    let mapa = arregloStored[indice]
    console.log(mapa)


  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      /*const cellText = document.createTextNode(`Grado en Celsius ${mapa.get("gradosC")}, Grados en Fahrenheit ${mapa.get("gradosF")}`);*/
      const cellText = document.createTextNode(0);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

}

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
