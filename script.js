// script.js
// Diccionario e implementación de búsqueda para el proyecto académico.

// Arreglo `diccionario` que contiene objetos con pares español - lengua materna.
// Cada objeto tiene las propiedades: `espanol` e `indigena`.
// Agregar al menos 10 palabras de ejemplo, organizadas y comentadas.
const diccionario = [
  { espanol: "casa", indigena: "wasi" },
  { espanol: "agua", indigena: "yaku" },
  { espanol: "perro", indigena: "allu" },
  { espanol: "maíz", indigena: "sara" },
  { espanol: "fuego", indigena: "nina" },
  { espanol: "sol", indigena: "inti" },
  { espanol: "tierra", indigena: "aka" },
  { espanol: "mano", indigena: "maki" },
  { espanol: "camino", indigena: "anta" },
  { espanol: "niño", indigena: "wawa" }
];

// Función buscarPalabra:
// - Lee el valor desde el input con id "palabra".
// - Busca en el arreglo `diccionario` una entrada cuyo campo `espanol`
//   coincida con el término (ignorando mayúsculas/minúsculas).
// - Si la encuentra, muestra la palabra en español y su traducción.
// - Si no la encuentra, muestra un mensaje de no encontrada.
function buscarPalabra() {
  const input = document.getElementById('palabra');
  const resultado = document.getElementById('resultado');

  // Tomar el valor y normalizar: trim y pasar a minúsculas
  const termino = input.value.trim().toLowerCase();

  if (!termino) {
    resultado.textContent = 'Por favor, escribe una palabra para buscar.';
    return;
  }

  // Buscar en el arreglo: comparar en minúsculas también
  const entrada = diccionario.find(item => item.espanol.toLowerCase() === termino);

  if (entrada) {
    // Mostrar resultado claro y sencillo
    resultado.innerHTML = `<strong>Español:</strong> ${entrada.espanol} <br><strong>Lengua materna:</strong> ${entrada.indigena}`;
  } else {
    resultado.textContent = 'La palabra no se encuentra en el diccionario.';
  }
}

// Conectar el botón de búsqueda al evento click y permitir búsqueda con Enter
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnBuscar');
  const input = document.getElementById('palabra');

  btn.addEventListener('click', buscarPalabra);

  // Permitir pulsar Enter para buscar
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarPalabra();
  });
});
