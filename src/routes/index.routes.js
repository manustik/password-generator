const express = require('express')
const router = express.Router()
const path = require('path')
const publicPath = path.join(__dirname, '../../public')


//Ruta Principal
router.get('/password-generator', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

//Ruta Error 404
 router.use('/error',(req, res) =>{
     res.status(404).render('404')
 })


module.exports = router