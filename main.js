function verificar() {
    var anhoActual = new Date().getFullYear();
    var formAnho = document.getElementById('txtano');
    var res = document.querySelector('div#res')

    if (formAnho.value.length == 0 || Number(formAnho.value) > anhoActual) {
        alert('[ERROR] Verifique los datos e intente nuevamente');
    } else {
        var formSex = document.getElementsByName('radiosex');
        var edad = anhoActual - Number(formAnho.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto');
        if (formSex[0].checked) {
            genero = 'Hombre'

            if (edad > 50) {
                // Anciano
                img.setAttribute('src', 'img/abuelo.png');
            } else if (edad <= 3) {
                // Bebe
                img.setAttribute('src', 'img/bebe.png')
            } else if (edad < 11) {
                // Niño
                img.setAttribute('src', 'img/ninho.png')
            } else if (edad < 15) {
                // Criatura
                img.setAttribute('src', 'img/criatura.png')
            } else if (edad < 26) {
                // Joven
                img.setAttribute('src', 'img/joven.png')
            } else {
                // Adulto
                img.setAttribute('src', 'img/adulto.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mujer'

            if (edad > 40) {
                // Anciano
                img.setAttribute('src', 'img/abuela-n.png');
            } else if (edad <= 3) {
                // Bebe
                img.setAttribute('src', 'img/bebe-n.png')
            } else if (edad < 6) {
                // Niña
                img.setAttribute('src', 'img/ninha.png')
            } else if (edad < 10) {
                // Criatura
                img.setAttribute('src', 'img/criatura-n.png')
            } else if (edad < 20) {
                // Joven
                img.setAttribute('src', 'img/adolescente-n.png')
            } else {
                // Adulto
                img.setAttribute('src', 'img/joven-n.png')
            }
        }
    }
    res.innerHTML = `Detectamos genero ${genero} con ${edad} años`
    res.appendChild(img);

}