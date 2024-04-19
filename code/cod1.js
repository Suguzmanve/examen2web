//Crear vector
var paises= []
var diferencia= ((((anho1-anho2) / anho1) *100 ) -1)

paises["Bélice", "Guatemala","Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panamá"];

function crear(){
    var TablaPaises = document.getElementById("TablaPaises");
    paises.forEach(function(pais) {  

        var fila = document.createElement("tr");

        // Crear celda para el nombre del país
        var celdaPais = document.createElement("td");
        celdaPais.textContent = pais;
        fila.appendChild(celdaPais);

        // Crear celda para el año 1
        var celdaAño1 = document.createElement("td");
        var inputAño1 = document.createElement("input");
        inputAño1.type = "text";
        celdaAño1.appendChild(inputAño1);
        fila.appendChild(celdaAño1);

        // Crear celda para el año 2
        var celdaAño2 = document.createElement("td");
        var inputAño2 = document.createElement("input");
        inputAño2.type = "text";
        celdaAño2.appendChild(inputAño2);
        fila.appendChild(celdaAño2);

        // Agregar fila al contenedor
        TablaPaises.appendChild(fila);
        
    });
}


// Llamar a la función para crear los campos de países cuando se cargue la página
crearCamposPaises();







// Llamar a la función crear
document.addEventListener("DOMContentLoaded", function() {
    crear();
});

//Esto es para guardar los paises en el local storage
	var datapaises={
		"nombre":txtNomb.value,
		"anho1":txtEmail.value,
		"anho2":txtEmail.value,
        "pos":s
	};

    var u = localStorage.getItem("usuario");

	//convierte el vector de pares a un JSON
	datapaises = JSON.stringify(datapaises);
	localStorage.setItem("usuario",datapaises);
