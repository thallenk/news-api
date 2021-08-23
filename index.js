//incluindo pacotes
const express = require('express')
var mysql      = require('mysql2');

// Instancia o express
const app = express()

// Definição de porta
const port = 3000

//Abrindo conexão com o banco mysql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Ann@1509'
  });

//Conectando
connection.connect();

// Serviço de Hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {

    //Busca Categorias no banco de dados
    connection.query('SELECT id, nome FROM sistema_noticias.categoria', function(err, rows, fields) {
        if (err) throw err;


        res.send(rows)

      });
  })

// Busca noticias de uma categoria
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {

    // Busca Categorias no banco de dados
    connection.query('SELECT id, titulo FROM sistema_noticias.noticia WHERE id_categoria = '+ req.params.categoriaId, function(err, rows, fields) {
        if (err) throw err;


        res.send(rows)

      });
  })

// Busca noticia especifica pelo id
app.get('/news-api/v1/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {

    // Busca Categorias no banco de dados
    connection.query(`SELECT id, titulo, conteudo FROM sistema_noticias.noticia WHERE id_categoria = ${req.params.categoriaId} AND id = ${req.params.noticiaId}` , function(err, rows, fields) {
        if (err) throw err;


        res.send(rows[0])

      });
  })

//Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})