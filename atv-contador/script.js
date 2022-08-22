var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');
var texto = document.getElementById('msg');

function contar() {
    var cini = Number(inicio.value);
    var cfim = Number(fim.value);
    var cpass = Number(passo.value)

    texto.innerHTML = "";
    
    for (c=cini;c <= cfim; c = c+=cpass) {
        texto.innerHTML += `${c} 👉 `
    } 

    texto.innerHTML += "🎏";
}
