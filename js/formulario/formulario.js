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

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target === document.getElementById('paymentModal')) {
        cerrarModal();
    }
}

// Crear el formulario de pago en JS
function crearFormularioDePago() {
    const modal = document.createElement('div');
    modal.id = 'paymentModal';
    modal.className = 'modal';
    modal.style.display = 'none'; // Inicialmente oculto

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = cerrarModal;

    const title = document.createElement('h2');
    title.textContent = 'Información de Pago';

    const form = document.createElement('form');
    form.id = 'paymentForm';

    const labels = [
        { for: 'cardNumber', text: 'Número de tarjeta' },
        { for: 'cardHolder', text: 'Titular de la tarjeta' },
        { for: 'expirationDate', text: 'Fecha de expiración' },
        { for: 'cvv', text: 'Código de seguridad (CVV)' }
    ];

    // Crear campos de entrada
    labels.forEach(labelInfo => {
        const label = document.createElement('label');
        label.setAttribute('for', labelInfo.for);
        label.textContent = labelInfo.text;

        const input = document.createElement('input');
        input.id = labelInfo.for;
        input.required = true;

        if (labelInfo.for === 'cardNumber') {
            input.type = 'text';
            input.placeholder = 'XXXX-XXXX-XXXX-XXXX';
            input.maxLength = 16;
            input.pattern = '\\d{16}';
            input.title = 'Solo se permiten 16 números';
            input.oninput = validarCardNumber;
        } else if (labelInfo.for === 'cardHolder') {
            input.type = 'text';
            input.placeholder = 'Nombre completo';
            input.pattern = '[A-Za-z\\s]+';
            input.title = 'Solo se permiten letras';
            input.oninput = validarCardHolder;
        } else if (labelInfo.for === 'expirationDate') {
            input.type = 'month';
            const currentYear = new Date().getFullYear();
            input.min = `${currentYear}-01`; // Fecha mínima >= 2024
            input.oninput = validarFechaExpiracion;
        } else if (labelInfo.for === 'cvv') {
            input.type = 'text';
            input.placeholder = 'XXX';
            input.maxLength = 3;
            input.pattern = '\\d{3}';
            input.title = 'Solo se permiten 3 números';
            input.oninput = validarCVV;
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    const totalLabel = document.createElement('p');
    totalLabel.innerHTML = 'Total a pagar: $<span id="modalTotalPrice" style="color: red;">0</span>';
    form.appendChild(totalLabel);

    // Contenedor para las cuotas
    const cuotasContainer = document.createElement('div');
    cuotasContainer.id = 'cuotas-container';
    cuotasContainer.style.display = 'none';

    const cuotasLabel = document.createElement('label');
    cuotasLabel.textContent = 'Elige las cuotas:';
    cuotasContainer.appendChild(cuotasLabel);

    const cuotasSelect = document.createElement('select');
    cuotasSelect.id = 'cuotas';
    cuotasContainer.appendChild(cuotasSelect);
    form.appendChild(cuotasContainer);

    const montoPorCuotaLabel = document.createElement('p');
    montoPorCuotaLabel.id = 'montoPorCuota';
    form.appendChild(montoPorCuotaLabel);

    // Crear el botón de pago
    const payButton = document.createElement('button');
    payButton.type = 'button';
    payButton.id = 'btnPagar';
    payButton.textContent = 'Realizar el pago';
    payButton.addEventListener('click', function() {
        // Evitar hacer nada si no es un formulario válido
        if (!validarFormularioPago()) {
            return;
        }

        // Simular la animación de pago
        mostrarAnimacionDePago();
        setTimeout(() => {
            alert('¡Pago realizado exitosamente!');
            limpiarCarrito();
            document.getElementById('cart-total').textContent = '0';
            // Recargar la página y resetear el formulario
            location.reload();
        }, 2000);
    });

    form.appendChild(payButton);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);

    // Agregar el modal al body
    document.body.appendChild(modal);
}

// Crear el formulario de pago cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    crearFormularioDePago();
});

// Limpiar el carrito de compras
function limpiarCarrito() {
    document.getElementById('cart-items').innerHTML = '';
}

// Validar el formulario de pago
function validarFormularioPago() {
    let isValid = true;

    ocultarErrores();

    if (!validarCardNumber()) {
        mostrarError('Número de tarjeta inválido.');
        isValid = false;
    }
    if (!validarCardHolder()) {
        mostrarError('El nombre del titular es inválido.');
        isValid = false;
    }
    if (!validarCVV()) {
        mostrarError('El código CVV es inválido.');
        isValid = false;
    }

    return isValid;
}

// Mostrar un mensaje de error
function mostrarError(message) {
    let errorElement = document.getElementById('error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = 'error-message';
        errorElement.style.color = 'red';
        document.body.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Función para ocultar los mensajes de error
function ocultarErrores() {
    let errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Función para simular una animación de pago
function mostrarAnimacionDePago() {
    const payButton = document.getElementById('btnPagar');
    payButton.disabled = true;
    payButton.textContent = 'Procesando...';
    setTimeout(() => {
        payButton.disabled = false;
        payButton.textContent = 'Realizar el pago';
    }, 2000);
}

// Validar número de tarjeta
function validarCardNumber() {
    const cardNumber = document.getElementById('cardNumber').value;
    return /^[0-9]{16}$/.test(cardNumber);
}

// Validar titular de tarjeta
function validarCardHolder() {
    const cardHolder = document.getElementById('cardHolder').value;
    return /^[A-Za-z\s]+$/.test(cardHolder);
}

// Validar código CVV
function validarCVV() {
    const cvv = document.getElementById('cvv').value;
    return /^[0-9]{3}$/.test(cvv);
}

// Validar fecha de expiración para no permitir fechas anteriores a 2024
function validarFechaExpiracion() {
    const expirationDate = document.getElementById('expirationDate').value;
    const currentYear = new Date().getFullYear();
    const expirationYear = parseInt(expirationDate.split('-')[0]);

    if (expirationYear < currentYear) {
        alert("La fecha de expiración no puede ser anterior a 2024.");
        document.getElementById('expirationDate').value = ''; // Limpiar la fecha incorrecta
    }
}






