// script.js
// Implementación de la base de datos (arreglo) y la función de búsqueda.

// 1) Base de datos: arreglo `diccionario` con objetos {espanol, indigena}
//    Añadir al menos 10 pares de ejemplo. Mantener datos sencillos.
const diccionario = [
  { espanol: "casa", indigena: "wasi" },
  { espanol: "agua", indigena: "yaku" },
  { espanol: "perro", indigena: "allu" },
  { espanol: "maiz", indigena: "sara" },
  { espanol: "fuego", indigena: "nina" },
  { espanol: "sol", indigena: "inti" },
  { espanol: "tierra", indigena: "aka" },
  { espanol: "mano", indigena: "maki" },
  { espanol: "camino", indigena: "anta" },
  { espanol: "nino", indigena: "wawa" }
];

// 2) buscarPalabra(): función que realiza la búsqueda y actualiza la UI.
// - Lee el texto del input con id="palabra".
// - Normaliza el término (trim + toLowerCase) para ignorar mayúsculas.
// - Busca una coincidencia exacta en el campo `espanol` del arreglo.
// - Muestra el resultado en el contenedor `resultado` de forma organizada.
// - Si no existe, muestra el mensaje amigable solicitado.
function buscarPalabra() {
  const input = document.getElementById('palabra');
  const resultado = document.getElementById('resultado');

  // Normalizar entrada: eliminar espacios y pasar a minúsculas
  const termino = input.value.trim().toLowerCase();

  // Si el usuario no escribió nada, pedirlo de forma amigable
  if (!termino) {
    resultado.innerHTML = '<div class="card">Por favor, escribe una palabra para buscar.</div>';
    return;
  }

  // Buscar en el diccionario (comparar en minúsculas)
  const entrada = diccionario.find(item => item.espanol.toLowerCase() === termino);

  if (entrada) {
    // Resultado organizado visualmente: tarjeta con etiquetas claras
    resultado.innerHTML = `
      <div class="card">
        <div><span class="label">Español:</span> ${entrada.espanol}</div>
        <div><span class="label">Lengua materna:</span> ${entrada.indigena}</div>
      </div>
    `;
  } else {
    // Mensaje cuando no se encuentra la palabra (requisito explícito)
    resultado.innerHTML = '<div class="card notfound">La palabra no se encuentra en el diccionario.</div>';
  }
}

// 3) Conexión con la interfaz: evento Click y tecla Enter
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnBuscar');
  const input = document.getElementById('palabra');

  // Buscar al hacer click
  btn.addEventListener('click', buscarPalabra);

  // Buscar al presionar Enter en el input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // evitar comportamiento por defecto
      buscarPalabra();
    }
  });
});
