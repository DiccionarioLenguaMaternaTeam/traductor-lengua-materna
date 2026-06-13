
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


function buscarPalabra() {
  const input = document.getElementById('palabra');
  const resultado = document.getElementById('resultado');


  const termino = input.value.trim().toLowerCase();


  if (!termino) {
    resultado.innerHTML = '<div class="card">Por favor, escribe una palabra para buscar.</div>';
    return;
  }


  const entrada = diccionario.find(item => item.espanol.toLowerCase() === termino);

  if (entrada) {

    resultado.innerHTML = `
      <div class="card">
        <div><span class="label">Español:</span> ${entrada.espanol}</div>
        <div><span class="label">Lengua materna:</span> ${entrada.indigena}</div>
      </div>
    `;
  } else {
    
    resultado.innerHTML = '<div class="card notfound">La palabra no se encuentra en el diccionario.</div>';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnBuscar');
  const input = document.getElementById('palabra');


  btn.addEventListener('click', buscarPalabra);

  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // evitar comportamiento por defecto
      buscarPalabra();
    }
  });
});
