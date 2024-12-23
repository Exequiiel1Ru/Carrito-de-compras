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
        // Mostrar el cuadro bonito con el mensaje
        mostrarCuadroBonito();
        limpiarCarrito();
        document.getElementById('cart-total').textContent = '0';
    }, 2000);
});

// Función para mostrar el cuadro bonito
function mostrarCuadroBonito() {
    // Crear el contenedor del modal
    const modal = document.createElement('div');
    modal.id = 'modalExito';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.textAlign = 'center';
    modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modalContent.style.width = '300px';

    // Mensaje de éxito
    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Pago realizado con éxito! ¿Desea ver su comprobante?';
    mensaje.style.marginBottom = '20px';
    modalContent.appendChild(mensaje);

    // Botón "Sí"
    const btnSi = document.createElement('button');
    btnSi.textContent = 'Sí';
    btnSi.style.marginRight = '10px';
    btnSi.style.padding = '10px 20px';
    btnSi.style.backgroundColor = '#4caf50';
    btnSi.style.color = '#fff';
    btnSi.style.border = 'none';
    btnSi.style.borderRadius = '5px';
    btnSi.style.cursor = 'pointer';
    btnSi.addEventListener('click', function() {
        console.log('Mostrar comprobante'); // Aquí irá la lógica para el comprobante
        cerrarModal();
    });
    modalContent.appendChild(btnSi);

    // Botón "No"
    const btnNo = document.createElement('button');
    btnNo.textContent = 'No';
    btnNo.style.padding = '10px 20px';
    btnNo.style.backgroundColor = '#f44336';
    btnNo.style.color = '#fff';
    btnNo.style.border = 'none';
    btnNo.style.borderRadius = '5px';
    btnNo.style.cursor = 'pointer';
    btnNo.addEventListener('click', function() {
        // Redirigir a la página de inicio
        window.location.href = './elcarrito.html';  // Puedes poner la URL específica aquí si es necesario
    });
    modalContent.appendChild(btnNo);

    // Agregar el contenido al modal
    modal.appendChild(modalContent);

    // Agregar el modal al documento
    document.body.appendChild(modal);
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modalExito');
    if (modal) {
        modal.remove();
    }
}

// Función para mostrar animación de pago (simulación)
function mostrarAnimacionDePago() {
    console.log('Animación de pago simulada');
}

// Función para validar el formulario de pago (simulación)
function validarFormularioPago() {
    // Aquí iría la validación del formulario (simulado como siempre válido)
    return true;
}

// Función para limpiar el carrito (simulación)
function limpiarCarrito() {
    console.log('Carrito limpiado');
}
