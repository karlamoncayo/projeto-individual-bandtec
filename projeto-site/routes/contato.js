var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Contato = require('../models').Contato;
var app = express();

let sessoes = [];

/* Enviar formulário de cadastro */
app.post('/contato', function(req,res){
	Contato.create({ // Pega o objeto Contato criado no Models para criar um insert das informações nos campos especificados.
		nomeContato: req.body.nomeContato,
		emailContato: req.body.emailContato,
		telefoneContato: req.body.telefoneContato,
		mensagemContato: req.body.mensagemContato
	}).then(function(){
		res.send(console.log("Deu certo!"));
	}).catch(function(erro){
		res.send("Erro ao enviar!" + erro);
	})
});

module.exports = router;
