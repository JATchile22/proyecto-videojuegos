# Proyecto Web

Proyecto web desarrollado con Node.js, MySQL y Bootstrap para la gestión y visualización de videojuegos y categorías.

## 📂 Estructura del Proyecto
- **`backend/`**: Contiene el servidor Node.js y el archivo de respaldo de la base de datos `datos.sql`.
- **`frontend/`**: Contiene la interfaz web (HTML, CSS y JavaScript) con consumo de API y filtros dinámicos.

## ⚙️ Instrucciones para Ejecutar
1. **Base de Datos**: 
   - Abre MySQL Workbench.
   - Importa y ejecuta el script completo ubicado en `backend/datos.sql`.
2. **Servidor Backend**:
   - Abre la terminal en la carpeta `backend` y ejecuta:
     ```bash
     npm install
     node server.js
     ```
3. **Frontend**:
   - Abre la carpeta `frontend` y ejecuta el archivo `index.html` usando **Live Server** en VS Code.

## 📊 Modelo Relacional (Puntos Extra)
![Modelo Relacional](../modelo_relacional.png)