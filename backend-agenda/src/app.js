import express from 'express';
import cors from 'cors';
import contactoRouters from './routes/contactoRouters.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));


app.get("/", (req, res) => {
    res.send("Página de inicio");
});

app.use('/contactos', contactoRouters);

app.use(errorHandler);


export default app;

