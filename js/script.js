
// chiedere all'utente il suo nome
var nome = prompt("inserisci il tuo nome:");

// chiedere all'utente il suo cognome
var cognome = prompt("inserisci il tuo cognome:");

// chiedere all'utente il suo colore preferito
var colore = prompt("inserisci il tuo colore preferito:");

// calcolo password
var password = nome + cognome + colore + 19;

// scrivere sulla pagina nomecognomecolorepreferito19

document.getElementById('psw').innerHTML = "La tua nuova password generata: " + password;
