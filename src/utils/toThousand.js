 /* EXPRESION REGULAR, permite poner los puntos de miles */
module.exports =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");