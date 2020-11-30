process.env.NODE_ENV = 'production';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var Contato = require('./models').Contato;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);

app.post('/contato', function (req, res) {
    Contato.create({
        nomeContato: req.body.nomeContato,
        emailContato: req.body.emailContato,
        telefoneContato: req.body.telefoneContato,
        mensagemContato: req.body.mensagemContato
    }).then(function () {
        res.sendFile(__dirname + "public/index.html");
    }).catch(function (erro) {
        res.send("Erro ao enviar!" + erro);
    })
});

module.exports = app;
