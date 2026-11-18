const URL_API = "http://localhost:3000/api/productos";

let listaVideojuegos = [];

const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");

// 1. Obtener datos desde la API del backend
async function obtenerVideojuegos() {
    try {
        const respuesta = await fetch(URL_API);
        listaVideojuegos = await respuesta.json();
        mostrarVideojuegos(listaVideojuegos);
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        contenedor.innerHTML = `
            <div class="alert alert-danger text-center">
                No se pudo conectar con el backend. Asegúrate de que el servidor esté encendido.
            </div>`;
    }
}

// 2. Mostrar tarjetas en pantalla
function mostrarVideojuegos(videojuegos) {
    contenedor.innerHTML = "";

    if (videojuegos.length === 0) {
        contenedor.innerHTML = `<p class="text-center text-muted">No se encontraron videojuegos.</p>`;
        return;
    }

    videojuegos.forEach(juego => {
        contenedor.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${juego.categoria}</span>
                        <h5 class="card-title">${juego.nombre}</h5>
                        <p class="card-text text-muted small">${juego.descripcion}</p>
                        <p class="card-text fw-bold text-success">$${juego.precio}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// 3. Filtrar dinámicamente en el DOM (por nombre y categoría)
function aplicarFiltros() {
    const texto = buscador.value.toLowerCase();
    const categoria = filtroCategoria.value;

    const filtrados = listaVideojuegos.filter(juego => {
        const coincideNombre = juego.nombre.toLowerCase().includes(texto);
        const coincideCategoria = categoria === "" || juego.categoria === categoria;
        return coincideNombre && coincideCategoria;
    });

    mostrarVideojuegos(filtrados);
}

// Eventos para los filtros
buscador.addEventListener("input", aplicarFiltros);
filtroCategoria.addEventListener("change", aplicarFiltros);

// Cargar los datos al abrir la página
obtenerVideojuegos();