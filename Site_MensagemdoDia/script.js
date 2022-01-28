function carregar() {
    var msg = window.document.getElementById('msg')
    var frase = window.document.getElementById('frase')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'imagens/manhã.gif'
        document.body.style.backgroundColor = '#ffb68b'
        frase.innerHTML = `<p>"Ao sol da manhã, uma gota de orvalho <br> precioso diamante." 
        Matsuo Basho</p>`

    } else if (hora >= 12 && hora <18){
        // Boa tarde
        img.src = 'imagens/tarde.gif'
        document.body.style.backgroundColor = '#96d2a6'
        frase.innerHTML = `"Que tudo aquilo que te encanta os olhos ilumine sua tarde, alimentando o coração somente daquilo que te faz bem!"

        Jared Hassa`

    } else {
        // Boa noite
        img.src = 'imagens/noite.gif'
        document.body.style.backgroundColor = '#00b0e2'
        frase.innerHTML = `"A noite vem com as estrelas que, mesmo escondidas, não deixam de brilhar." `
    }

}
