 Descripción general

Este proyecto implementa una calculadora básica utilizando HTML para la estructura, JavaScript para la lógica de las operaciones y CSS para los estilos visuales.
El sistema permite realizar operaciones aritméticas simples como suma, resta, multiplicación, división y manejo de números decimales.

 Archivos principales

index.html → Definimos la estructura de la calculadora.

script.js -> Contiene las funciones que manejan la lógica de la calculadora.

estilos.css -> contiene el diseño del html

Estructura del HTML (index.html)
    Encabezado (<head>)

Se especifica el idioma español (lang="es").

Se define la codificación de caracteres UTF-8.

Se agrega la meta etiqueta para diseño responsivo.

Se enlazan los archivos externos: estilos.css y script.js.

 Cuerpo (<body>)

Contenedor principal (div.calculadora): agrupa los elementos de la calculadora.

Pantalla (input type="text"):

ID: pantalla.

Clase: pantalla.

Solo lectura (readonly) → evita que el usuario escriba directamente.

Botonera (div.botonera): conjunto de botones numéricos y de operaciones.

Cada botón tiene el atributo data-valor para identificar la acción.

Incluye números del 0 al 9, operadores (+, -, *, /), punto decimal, botón de borrado (id="btn-borrar") y el de cálculo (=).

Funciones en JavaScript (script.js)
    function agregar(valor)

Propósito:
Agrega el valor de un botón presionado al contenido de la pantalla de la calculadora.

Código:

function agregar(valor) {
  document.getElementById('pantalla').value += valor;
}


Parámetro:

valor: carácter correspondiente al número u operador.

Acción:
Concatena el valor ingresado en el campo de texto pantalla.

 function calcular()

Propósito:
Evalúa la expresión matemática escrita en la pantalla.

Código:

function calcular() {
  try {
    document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
  } catch {
    document.getElementById('pantalla').value = 'Error';
  }
}


Funcionamiento:

Utiliza eval() para resolver la expresión aritmética.

Si ocurre un error (ejemplo: expresión inválida), muestra "Error" en la pantalla.


 function limpiar()

Propósito:
Borra completamente el contenido de la pantalla.

Código:

function limpiar() {
  document.getElementById('pantalla').value = '';
}


Acción:
Reinicia el valor de la pantalla, dejándola vacía.

 Flujo de funcionamiento

El usuario pulsa un botón (ejemplo: 5).

Se ejecuta la función agregar("5") → la pantalla muestra 5.

El usuario pulsa un operador (ejemplo: +) y otro número (3).

La pantalla muestra 5+3.

Al presionar =, se ejecuta calcular().

La pantalla muestra el resultado (8).

Si el usuario desea borrar todo, pulsa Borrar → limpiar().
