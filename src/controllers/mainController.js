const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = require('../utils/toThousand');
const toDiscount  = require('../utils/toDiscount');

const controller = {
	index: (req, res) => {
		return res.render('index',{
			visited : products.filter(product => product.category === 'visited'),/* una manera de filtar es esta, la otra esta en index, realizada con if */
			products,
			toThousand,
			toDiscount
			
		
		}
		)
	},
	search: (req, res) => { /* recibo los datos del query , los proceso y hago la magia */
		// Do the magic
	},
};

module.exports = controller;
