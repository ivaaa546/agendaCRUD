// server.js
import app from './src/app.js';

const PORT = 3000;

function startServer() {
    const server = app.listen(PORT, () => {
        console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });

    server.on("error", (err) => {
        console.error(" Error al iniciar el servidor:", err);
        process.exit(1);
    });
}

startServer();
