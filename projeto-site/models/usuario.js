	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenome: {
			field: 'sobrenome',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		idade: {
			field: 'idade',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		emailLogin: {
			field: 'emailLogin',
			type: DataTypes.STRING,
			allowNull: false
		},
		senhaLogin: {
			field: 'senhaLogin',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuario', // Nome da tabela igual ao que está no banco de dados
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
