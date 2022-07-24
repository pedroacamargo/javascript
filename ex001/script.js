function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var res = window.document.getElementById("res")
    var ano = window.document.getElementById("ano").value
    if (ano.length == 0 || ano.value > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var sex = document.getElementsByName("sexoradio")
        var idade = anoAtual - Number(ano)
        var gênero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sex[0].checked) {
            gênero = 'Masculino' 
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", 'imgs/Fotos Ex15 Curso JS/foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", 'imgs/Fotos Ex15 Curso JS/foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'imgs/Fotos Ex15 Curso JS/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`
        res.appendChild(img)
    } 
}