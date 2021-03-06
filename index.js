const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB()

//Habilitar cors
app.use(cors())

//Habilitar el express.json , para no utilizar el bodyParser
app.use(express.json({extended: true }))

//puerto de la app
const port = process.env.PORT || 4000;

//Importar Rutas
app.use('/api/usuarios',require('./routes/usuarios'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/proyectos',require('./routes/proyectos'))
app.use('/api/tareas',require('./routes/tareas'))


//definir la pagina principal
app.get('/',(req,res)=>{
    res.send('hola mundo')
})

//arrancar el servidor
app.listen(port,'0.0.0.0', ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
