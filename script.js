function agregar(valor) {
  document.getElementById('pantalla').value += valor;


function calcular() {
  try {
    document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
  } catch {
    document.getElementById('pantalla').value = 'Error';
  }
}

function limpiar() {
  document.getElementById('pantalla').value = '';
}
