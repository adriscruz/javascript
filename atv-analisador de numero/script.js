let valores = [];


function tabuada() {
    let num = document.getElementById('num');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value);
        let c = 1;
        
        if (n > 0 && n <= 100) {
            let item = document.createElement('option');
            item.text = `Valor ${n} adicionado.`;
            tab.appendChild(item); 
            valores.push(n);
        } else {
            window.alert('Por favor digite entre 1 e 100');
        }
        
    }

    num.value = '';
    num.focus()
    
}

function analise() {

    let txtRes = document.getElementById('res');
    let maior = valores[0];
    let menor = valores[0];
    let total = null;

    for(let c = 0; c < valores.length; c++){

        total += valores[c];

        if(valores[c] > maior){
            maior = valores[c];
        } if (valores[c] < menor){
            menor = valores[c];
        } 
    }

    txtRes.innerHTML += `Ao todo, temos ${valores.length} números cadastrados`

    txtRes.innerHTML += `<br><br>O maior valor informado foi ${maior}`
    txtRes.innerHTML += `<br><br>O menor valor informado foi ${menor}`
    txtRes.innerHTML += `<br><br>Somando todos os valores, termos ${total}`
    txtRes.innerHTML += `<br><br>A média dos valores digitados é ${total/valores.length}`

}
