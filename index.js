// Arquivo de rotas

const express = require("express");
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }))


// ******  Rotas

app.post('/cadastro', (req, res) => {  // CREATE
   res.render('cadastro', {

   })

   res.redirect('/')
})

app.get('/', (req, res) => {  // READ página home
   res.render('home')
})

app.get('/cadastro', (req, res) => {  // READ páginade cadastros
   res.render('cadastro')
})

app.get('/detalhes/:id', (req, res) => { // READ

})

app.patch('/detalhes/:id', (req, res) => {  // UPDATE

})

app.delete('/detalhes/:id', (req, res) => {  // DELETE
    
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));