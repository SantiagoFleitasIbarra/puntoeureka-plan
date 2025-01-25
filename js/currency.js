async function convertirMoneda(plan) {
  try {
    // Tasas de cambio aproximadas (pueden necesitar actualización)
    const tasas = {
      UYU_USD: 0.023  // 1 UYU = 0.023 USD
    };

    const monedaSelect = document.querySelector(`#precio-${plan}-uy`).nextElementSibling.querySelector('select');
    const monedaDestino = monedaSelect.value;
    
    let precioBase, precioConvertido;
    
    if (plan === 'avanzado') {
      precioBase = 1500;
    } else if (plan === 'experto') {
      precioBase = 2000;
    }

    // Convertir de UYU a la moneda seleccionada
    switch (monedaDestino) {
      case 'USD':
        precioConvertido = (precioBase * tasas.UYU_USD).toFixed(2);
        document.querySelector(`#precio-${plan}-uy`).textContent = `${precioConvertido} USD`;
        break;
      default: // UYU
        document.querySelector(`#precio-${plan}-uy`).textContent = `${precioBase} UYU`;
    }
  } catch (error) {
    console.error('Error al convertir moneda:', error);
  }
}

// Opcional: Inicializar con conversión predeterminada si se desea
window.onload = function() {
  convertirMoneda('avanzado');
  convertirMoneda('experto');
};