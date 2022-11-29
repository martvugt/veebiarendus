const ylesanne1 = {
    kirjeldus: 'Praadida mune',
    tehtud: false,
    olulisus: 4
}

function naitaYlesannet(ylesanne) {
    const valjund = document.getElementById('valjund')
    valjund.innerHTML = ylesanne.kirjeldus

}

naitaYlesannet(ylesanne1)
