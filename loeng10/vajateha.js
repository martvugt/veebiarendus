const varvid = [
    'Pese hambad ja nägu',
    'Toida kassi',
    'Prae muna',
    'Loe hommikusi uudiseid',
]

function lisaValjund(tekst) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
    <div>
    <input type="checkbox">
    ${tekst}
    </div>
    `

}

function valjastaVarvid() {
    for (let index=0; index < ylesanded.lenght;++ ) {
    lisaValjund(varvid [0])
}
}

valjastaVarvid()
