// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const searchForm = document.getElementById('search-form');
    const wordInput = document.getElementById('word-input');
    const searchButton = document.getElementById('search-button');
    const resultsSection = document.getElementById('results-section');
    
    // Función para manejar la búsqueda
    function handleSearch(event) {
        event.preventDefault();
        
        // Obtener y limpiar el valor del input
        const searchWord = wordInput.value.trim();
        
        // Validar que no esté vacío
        if (!searchWord) {
            showMessage('Por favor, ingresa una palabra para buscar.', 'warning');
            wordInput.focus();
            return;
        }
        
        // Mostrar estado de carga
        showMessage(`Buscando traducción para: "${searchWord}"...`, 'loading');
        
        // Aquí se integrará la lógica de traducción en el futuro
        // Por ahora, mostramos un mensaje de demostración
        setTimeout(() => {
            showMessage(`Resultados para: "${searchWord}"`, 'success');
        }, 1000);
    }
    
    // Función para mostrar mensajes en la sección de resultados
    function showMessage(message, type = 'info') {
        resultsSection.innerHTML = `
            <div class="result-message ${type}">
                <p>${message}</p>
            </div>
        `;
    }
    
    // Agregar event listener para el envío del formulario
    searchForm.addEventListener('submit', handleSearch);
    
    // Agregar event listener para el botón de búsqueda (por si se hace clic directamente)
    searchButton.addEventListener('click', function(event) {
        // Si el botón está dentro del formulario, el submit event lo manejará
        // Este listener es por si se necesita alguna validación adicional
    });
    
    // Agregar event listener para la tecla Enter en el input
    wordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchForm.dispatchEvent(new Event('submit'));
        }
    });
    
    // Enfocar el input automáticamente al cargar la página
    wordInput.focus();
    
    // Mensaje inicial
    showMessage('Ingresa una palabra en español para comenzar la búsqueda.', 'info');
});