var age = parseInt(prompt('quanti anni hai?'))
console.log(age);

var kilometraggio = (prompt('quanti chilometri devi percorrere?'))
console.log(kilometraggio);

var prezzo = kilometraggio * 0.21;

if (age < 18) {
    prezzo = prezzo - (prezzo / 100 * 20) ;
} else if (age > 64) { 
    prezzo = prezzo - (prezzo / 100 * 40) ;
} 

document.getElementById('prezzo-finale').innerHTML = prezzo.toFixed(2) + "€" ;
console.log(prezzo);