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


function buscarPalabra() {
  const input = document.getElementById('palabra');
  const resultado = document.getElementById('resultado');


  const termino = input.value.trim().toLowerCase();

  if (!termino) {
    resultado.textContent = 'Por favor, escribe una palabra para buscar.';
    return;
  }


  const entrada = diccionario.find(item => item.espanol.toLowerCase() === termino);

  if (entrada) {
    // Mostrar resultado claro y sencillo
    resultado.innerHTML = `<strong>Español:</strong> ${entrada.espanol} <br><strong>Lengua materna:</strong> ${entrada.indigena}`;
  } else {
    resultado.textContent = 'La palabra no se encuentra en el diccionario.';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnBuscar');
  const input = document.getElementById('palabra');

  btn.addEventListener('click', buscarPalabra);


  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarPalabra();
  });
});
