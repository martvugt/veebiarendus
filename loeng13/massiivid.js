const Kassid = [
   "./pildid/kassid_01_760x563.jpg",
   "./pildid/kassid_02_760x563.jpg",
   "./pildid/kassid_03_760x563.jpg",
   "./pildid/kassid_04_760x563.jpg",
   "./pildid/kassid_05_760x563.jpg",
   "./pildid/kassid_06_760x563.jpg",
]

function addPhoto(pictureUrl) {
  const outputBlokk = document.getElementById('output')
  outputBlokk.innerHTML += `
  <div>
  <img src="${pictureUrl}">
  </div>
  `
}

function outputButterflys () {
  addPhoto(Kassid[0])
  addPhoto(Kassid[1])
  addPhoto(Kassid[2])
  addPhoto(Kassid[3])
  addPhoto(Kassid[4])
  addPhoto(Kassid[5])
}

outputButterflys()