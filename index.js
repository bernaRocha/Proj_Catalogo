// Arquivo de rotas

const express = require("express");
const app = express()

app.post('/cadastro', (req, res) => {  // CREATE
   res.render('cadastro', {

   })
})

app.get('/home', (req, res) => {  // READ

})

app.get('/detalhes/:id', (req, res) => { // READ

})


app.delete('/detalhes/:id', (req, res) => {  // DELETE
    
})


app.patch('/detalhes/:id', (req, res) => {  // UPDATE

})