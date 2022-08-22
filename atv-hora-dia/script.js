function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('fotoDoDia');
    var data = new Date();
    var hora = data.getHours();
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = '/atv-hora-dia/imagens/manhã.png'
        document.body.style.background = '#F3E1CD'

    } else if (hora >= 12 && hora <18) {

        img.src = '/atv-hora-dia/imagens/tarde.png'
        document.body.style.background = '#B3956E'

    } else {

        img.src = '/atv-hora-dia/imagens/noite.png'
        document.body.style.background = '#0A1819'
    }

}
