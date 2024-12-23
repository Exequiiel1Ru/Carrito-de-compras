/// Aqui se encuentran los siguientes detalles: Cuotas,

// Función para mostrar el modal de pago y actualizar el precio
function mostrarModalPago() {
    const totalPrice = parseFloat(document.getElementById('cart-total').textContent);

    if (totalPrice <= 0) {
        alert("¡Tu carrito está vacío! Agrega productos antes de proceder.");
        return;
    }

    document.getElementById('modalTotalPrice').textContent = `$${totalPrice.toFixed(2)}`;
    actualizarCuotas(totalPrice);
    document.getElementById('paymentModal').style.display = 'flex';
    document.getElementById('cardNumber').focus();  // Focalizar el primer campo de entrada
}

// Función para actualizar las opciones de cuotas y mostrar el precio por cuota
function actualizarCuotas(totalPrice) {
    const cuotasSelect = document.getElementById('cuotas');
    const cuotasContainer = document.getElementById('cuotas-container');
    cuotasContainer.style.display = 'block';

    // Limpiar las opciones anteriores de cuotas
    cuotasSelect.innerHTML = '';

    // Crear las opciones de cuotas (1 a 12 cuotas)
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} cuota${i > 1 ? 's' : ''}`;
        cuotasSelect.appendChild(option);
    }

    // Agregar un evento para actualizar el monto por cuota cuando se selecciona una opción
    cuotasSelect.addEventListener('change', function() {
        const selectedCuotas = parseInt(cuotasSelect.value);
        if (selectedCuotas > 0) {
            mostrarMontoCuota(totalPrice, selectedCuotas);
            actualizarTotalConCuotas(totalPrice, selectedCuotas); // Actualizamos el total
        }
    });

    // Mostrar el monto por cuota por defecto (1 cuota)
    mostrarMontoCuota(totalPrice, 1);
    actualizarTotalConCuotas(totalPrice, 1); // Actualizamos el total con la primera cuota
}

// Función para mostrar el monto por cuota con el 2% de interés adicional
function mostrarMontoCuota(totalPrice, cuotas) {
    const precioConInteres = totalPrice * Math.pow(1.02, cuotas - 1);
    const cuota = precioConInteres / cuotas;
    document.getElementById('montoPorCuota').textContent = `$${cuota.toFixed(2)} por cuota (${cuotas} cuotas)`;
}

// Función para actualizar el total a pagar con el interés según las cuotas seleccionadas
function actualizarTotalConCuotas(totalPrice, cuotas) {
    const precioConInteres = totalPrice * Math.pow(1.02, cuotas - 1);
    const totalConInteres = precioConInteres.toFixed(2);

    // Resaltar el total a pagar con un color
    const totalElement = document.getElementById('modalTotalPrice');
    totalElement.textContent = `$${totalConInteres}`;
    totalElement.style.color = 'red'; // Resaltamos el total en rojo
}

// Función para cerrar el modal de pago
function cerrarModal() {
    document.getElementById('paymentModal').style.display = 'none';
    limpiarCarrito();
    document.getElementById('cart-total').textContent = '0';
}



