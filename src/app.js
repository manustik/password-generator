const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes/index.routes')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//Pagina inicio
app.get('/', (req, res) => {
    res.render('index');
  });
  
//Rutas
app.use(require('./routes/index.routes'))

//Static Files
app.use(express.static(path.join(__dirname,'../public')))

//404 error
 app.use((req, res) => {
     res.render('404')
   })

const PORT = 5010

app.listen(PORT, () =>{
    console.log(`Server a la espera de conexiones http://localhost:${PORT}/`)
})

