process.env.NODE_ENV = 'production';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var contatoRouter = require('./routes/contato');
var Contato = require('./models').Contato;



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
// app.use('/contato', contatoRouter);


app.post('/contato', function (req, res) {
    Contato.create({
        nomeContato: req.body.nomeContato,
        emailContato: req.body.emailContato,
        telefoneContato: req.body.telefoneContato,
        mensagemContato: req.body.mensagemContato
    }).then(function () {
        console.log("Foi!");
        res.redirect('/')
    }).catch(function (erro) {
        res.send("Erro ao enviar!" + erro);
    })
});

module.exports = app;
