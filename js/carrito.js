// Array de productos con stock inicializado en 3 
const productos = [
    { id: 1, nombre: "Celular A15 Pro", precio: 16000, imagen: "./fotos/1.png", descripcion: "Celular con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 5 },
    { id: 2, nombre: "Celular A24 ULTRA", precio: 20000, imagen: "./fotos/2.png", descripcion: "Celular con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 4 },
    { id: 3, nombre: "Notebook Lenovo Ideapad 1 15ijl7", precio: 240000, imagen: "./fotos/compu.jpg", descripcion: "Notebook con Tarjeta gráfica: Intel UHD Graphics. Con pantalla táctil: No. Resolución de la pantalla: 1366 px x 768 pxProcesador: Intel Celeron N4500.Sistema operativo: Windows 11 Home -Conexión wifi y bluetooth.Cuenta con 3 puertos USB y puerto HDMI. Si eres programador esta es tu notebook ideal, por un precio razonable te puedes llevar un gran producto.¿Que estas esperando?", stock: 3 },
    { id: 4, nombre: "apple pro max 16", precio: 35700, imagen: "./fotos/3.jpg", descripcion: "apple pro max 16 con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente", stock: 6 },
    { id: 5, nombre: "Samsung Galaxy A55", precio: 16600, imagen: "./fotos/samsung.jpg", descripcion: "Samsung con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 3 },
    { id: 6, nombre: "Motorola G24 128GB 4GB RAM Gris Oscuro", precio: 25000, imagen: "./fotos/motorola.jpg", descripcion: "Motorola con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 4 },
    { id: 7, nombre: "Tecno Spark 20c Dual SIM 128 GB Negro 4 GB ", precio: 20000, imagen: "./fotos/tecno.jpg", descripcion: "Tecno cuenta con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 3 },
    { id: 8, nombre: "Samsung Galaxy A55", precio: 20000, imagen: "./fotos/samsung.jpg", descripcion: "Samsung con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 6 },

    { id: 9, nombre: "Moto G32 128 GB plateado 6 GB", precio: 20055, imagen: "./fotos/moto1.jpg", descripcion: "Motorola con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente.", stock: 7 },
    { id: 10, nombre: "Xiaomi Redmi A3 Dual SIM 64 GB forest green", precio: 40050, imagen: "./fotos/xiaomi.jpg", descripcion: "Xiami cuenta con una gran cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente", stock: 2 },
    { id: 11, nombre: "Alcatel R24 MAX", precio: 20000, imagen: "./fotos/2.png", descripcion: "Alcatel cuenta con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente. Ideal para jugar a los videos juegos ya que cuenta con unos graficos excelentes, puede ser tuyo. ¿Que estas esperando?", stock: 8 },
    { id: 12, nombre: "Motorola LG56", precio: 45520, imagen: "./fotos/3.jpg", descripcion: "Este Motorola cuenta con cámara de 48MP y batería de larga duración. Este dispositivo destaca por su potente cámara de 48 megapíxeles, ideal para capturar fotos y videos con gran detalle y claridad. Además, su batería de alta capacidad te permitirá disfrutar de un uso prolongado sin necesidad de cargarlo constantemente. Ideal para jugar a los videos juegos ya que cuenta con unos graficos excelentes, puede ser tuyo. ¿Que estas esperando?.", stock: 3 }
];

const carrito = [];

// Filtrar productos por nombre
function filtrarProductos() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(searchValue));
    mostrarProductos(productosFiltrados);

    const noProductsMessage = document.getElementById("noProductsMessage");
    if (productosFiltrados.length === 0) {
        noProductsMessage.classList.remove("hidden");
    } else {
        noProductsMessage.classList.add("hidden");
    }
}

// Mostrar productos
function mostrarProductos(productos) {
    const productosContainer = document.getElementById("products");
    productosContainer.innerHTML = "";

    productos.forEach(producto => {
        const productoCard = document.createElement("div");
        productoCard.classList.add("product-card");
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="description">${producto.descripcion}</p>
            <p class="price">$${producto.precio}</p>
            <p>Cantidad disponible: <span id="stock-${producto.id}">${producto.stock}</span></p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoCard);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    let itemEnCarrito = carrito.find(p => p.id === id);

    if (producto.stock > 0) {
        if (!itemEnCarrito) {
            // Si no existe en el carrito, lo agregamos
            carrito.push({ ...producto, cantidad: 1 });
        } else if (itemEnCarrito.cantidad < 3) { 
            // Si existe y no superó el stock máximo (3)
            itemEnCarrito.cantidad++;
        } else {
            mostrarMensaje("No puedes agregar más de este producto, has alcanzado el límite de stock.Que son 3(Tres) por persona.", "red");
            return;
        }

        producto.stock--; // Reducir stock disponible
        actualizarCarrito();
        actualizarStock(producto.id, producto.stock);
        guardarEnLocalStorage();
    } else {
        mostrarMensaje("No hay suficiente stock disponible.", "red");
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    const itemEnCarrito = carrito.find(p => p.id === id);
    const productoOriginal = productos.find(p => p.id === id);

    if (itemEnCarrito) {
        if (itemEnCarrito.cantidad > 1) {
            // Si hay más de 1 unidad, reducir solo una
            itemEnCarrito.cantidad--;
        } else {
            // Si solo hay una unidad, eliminar el producto del carrito
            carrito.splice(carrito.indexOf(itemEnCarrito), 1);
        }

        productoOriginal.stock++; // Restaurar el stock
        actualizarCarrito();
        actualizarStock(productoOriginal.id, productoOriginal.stock);
        guardarEnLocalStorage();
    }
}

// Actualizar stock en la interfaz
function actualizarStock(id, stock) {
    const stockElement = document.getElementById(`stock-${id}`);
    if (stockElement) {
        stockElement.textContent = stock;
    }
}

// Actualizar carrito
function actualizarCarrito() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${producto.nombre} x${producto.cantidad} - $${producto.precio * producto.cantidad}
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += producto.precio * producto.cantidad;
    });

    document.getElementById("cart-total").textContent = total;
}

// Guardar datos del carrito en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        carrito.length = 0; // Limpiar el carrito actual
        carrito.push(...carritoGuardado); // Cargar el carrito guardado
        actualizarCarrito();
    }
}

// Llamada inicial para cargar el carrito al cargar la página
cargarCarritoDesdeLocalStorage();

// Mostrar productos inicialmente
mostrarProductos(productos);

// Eventos
document.getElementById("searchInput").addEventListener("input", filtrarProductos);

// Mostrar mensajes en la interfaz
function mostrarMensaje(mensaje, color) {
    const mensajeContainer = document.createElement("div");
    mensajeContainer.textContent = mensaje;
    mensajeContainer.style.backgroundColor = color;
    mensajeContainer.style.color = "white";
    mensajeContainer.style.padding = "10px";
    mensajeContainer.style.borderRadius = "5px";
    mensajeContainer.style.position = "fixed";
    mensajeContainer.style.top = "20px";
    mensajeContainer.style.left = "50%";
    mensajeContainer.style.transform = "translateX(-50%)";
    mensajeContainer.style.zIndex = "1000";
    document.body.appendChild(mensajeContainer);

    setTimeout(() => {
        mensajeContainer.remove();
    }, 3000);
}


//////////////////////////////////////////////////////////////


// Evento para cancelar el carrito
document.getElementById("clear-cart").addEventListener("click", cancelarCarrito);

function cancelarCarrito() {
    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        mostrarMensaje("Usted no ha seleccionado ningún producto aún.", "red");
        return; // Si no hay productos, no proceder con la cancelación
    }

    // Iterar sobre los productos en el carrito y restaurar el stock
    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        if (producto) {
            producto.stock += item.cantidad; // Restituir el stock original
        }
    });

    // Vaciar el carrito
    carrito.length = 0;

    // Actualizar la interfaz
    actualizarCarrito();
    
    // Actualizar el stock en la interfaz de productos
    productos.forEach(producto => {
        actualizarStock(producto.id, producto.stock);
    });

    // Limpiar el carrito en localStorage
    localStorage.removeItem("carrito");

    // Mostrar mensaje de confirmación
    mostrarMensaje("El carrito ha sido cancelado y el stock ha sido restaurado.", "green");
}


 /////////////////////////////////////////////// ESTA PARTE ES EL MENSAJE DEL CARRITO VACIO Cuando le das a pagar sin tener un producto////





// Función para mostrar el modal de pago y actualizar el precio
function mostrarModalPago() {
    const totalPrice = parseFloat(document.getElementById('cart-total').textContent);

    if (totalPrice <= 0) {
        // Crear un mensaje que dure 3 segundos
        const mensaje = document.createElement('div');
        mensaje.textContent = "¡Tu carrito está vacío! Agrega productos antes de proceder.";
        mensaje.style.position = 'fixed';
        mensaje.style.top = '10px';
        mensaje.style.left = '50%';
        mensaje.style.transform = 'translateX(-50%)';
        mensaje.style.padding = '10px 20px';
        mensaje.style.backgroundColor = '#f44336';  // Rojo
        mensaje.style.color = 'white';
        mensaje.style.borderRadius = '5px';
        mensaje.style.fontSize = '16px';
        mensaje.style.zIndex = '1000';

        document.body.appendChild(mensaje);

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 3000);

        return;
    }

    document.getElementById('modalTotalPrice').textContent = `$${totalPrice.toFixed(2)}`;
    actualizarCuotas(totalPrice);
    document.getElementById('paymentModal').style.display = 'flex';
    document.getElementById('cardNumber').focus();  // Focalizar el primer campo de entrada
}








 ///////////////////// TERMINA ACA




