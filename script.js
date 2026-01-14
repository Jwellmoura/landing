function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // desafio: fazer a alteracao do "alt" da imagem tambem

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Wellington sorrindo, com blusa preta, barba e fundo de uma paisagem da natureza"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Wellington sorrindo, com casaco laranja, barba e fundo cinza"
    )
  }

  // Desafio concluido
}
