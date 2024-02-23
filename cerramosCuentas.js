// LOGIN
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('continuarBtn').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    window.location.href = 'cerramosCuentas.html?nombre=' + encodeURIComponent(nombre);
  });
  
});

// INFO DESPLEGABLE
document.addEventListener("DOMContentLoaded", function() {
  var heading = document.querySelector(".infoDesplegable");
  var content = document.querySelector(".infoContenido");

  heading.addEventListener("click", function() {
    this.classList.toggle("open");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});


// CUANTO DEJO - División y porcentaje.
function calculateTip() {
  var totalCuenta = parseFloat(document.getElementById("totalCuenta").value);
  var numPersonas = parseInt(document.getElementById("numPersonas").value);
  var porcentajeProp = parseFloat(document.getElementById("porcentajeProp").value);

  // si te haces el chistoso mandando el input vacío te mando un alert
  if (isNaN(totalCuenta) || isNaN(numPersonas) || isNaN(porcentajeProp)) {
      alert("Por favor, ingresa valores numéricos válidos.");
      return;
  }

  // acá sucede la magia de la calculadora, no lo toques laion que anda bien!
  var totalProp = totalCuenta * (porcentajeProp / 100);
  var totalPorPerson = (totalCuenta + totalProp) / numPersonas;
  
  // lo que ve el user tukii
  document.getElementById("totalPorPerson").innerHTML = "Total por persona: $" + totalPorPerson.toFixed(2);
  document.getElementById("totalProp").innerHTML = "Propina: $" + totalProp.toFixed(2);
}


// CUANTO DUELE - suma, agregar y eliminar campos .
function calcularSuma() {
  var campos = document.getElementsByClassName('campo');
  var suma = 0;
  var preciosVacios = false; 

  for (var i = 0; i < campos.length; i++) {
    var producto = campos[i].getElementsByTagName('input')[0].value;
    var precio = parseFloat(campos[i].getElementsByTagName('input')[1].value);

    //No se hagan los chistosos mandando numeros vacíos
    if (isNaN(precio)) {
      preciosVacios = true;
      break;
    } else {
      suma += precio;
    }

    if (producto !== '') {
      console.log('Producto: ' + producto + ', Precio: ' + precio.toFixed(2));
    }
  }

  if (preciosVacios) {
    alert('Por favor, ingrese un precio para todos los productos.');
  } else {
    console.log('sumaTotal' + suma.toFixed(2));

    // lo que ve el user:
    document.getElementById('sumaTotal').textContent = 'Total: $' + suma.toFixed(2);
  }
}

// tenemos que sumar cosas asi que se agregan cuantos campos quieras
function agregarCampo() {
  var container = document.getElementById('campos');
  var campo = document.createElement('div');
  campo.className = 'campo';

  var productoInput = document.createElement('input');
  productoInput.type = 'text';
  productoInput.placeholder = 'Producto';
  campo.appendChild(productoInput);

  var precioInput = document.createElement('input');
  precioInput.type = 'number';
  precioInput.placeholder = 'Precio $';
  campo.appendChild(precioInput);

  var eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.className = 'btn btn-danger btn-sm'; // Agregar la clase btn-danger para agregar botones rojos tukii
  eliminarBtn.onclick = function() {
    container.removeChild(campo);
  };
  campo.appendChild(eliminarBtn);

  container.appendChild(campo);
}

// Nos re vimos campo 
function eliminarCampo(element) {
  var campo = element.parentNode;
  campo.parentNode.removeChild(campo);
}