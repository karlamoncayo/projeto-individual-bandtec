var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Contato = require('../models').Contato;
var app = express();

let sessoes = [];

/* Enviar formulário de cadastro */
app.post('/contato', function(req,res){
	Contato.create({
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


/*router.post('/contato', function(req, res, next) {
	console.log('Enviando formulário de contato!');
	
	Contato.create({
		nomeContato: req.body.nomeContato,
		emailContato: req.body.emailContato,
		telefoneContato: req.body.telefoneContato,
		mensagemContato: req.body.mensagemContato
	}).then(resultado => {
		console.log(`Mensagem enviada: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});*/

module.exports = router;
