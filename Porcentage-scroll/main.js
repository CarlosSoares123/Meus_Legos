// Define uma função chamada "scrollPercentage"
let scrollPercentage = () => {
  // Seleciona o elemento HTML com o id "progress"
  let scrollProgress = document.getElementById('progress')

  // Seleciona o elemento HTML com o id "progress-value"
  let progressValue = document.getElementById('progress-value')

  // Seleciona a posição atual do scroll da página
  let pos = document.documentElement.scrollTop

  // Calcula a altura total da página subtraindo a altura visível
  let calcHeigth =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  // Calcula a porcentagem de scroll atual
  let scrollValue = Math.round((pos * 100) / calcHeigth)

  // Define o background do elemento "scrollProgress" com uma cor gradiente
  scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`

  // Coloca o '%' no umero
  progressValue.textContent = `${scrollValue}%`
}

// Quando a página é rolada, a função "scrollPercentage" é executada
window.onscroll = scrollPercentage

// Quando a página é processada, a funcao e executada
window.onload = scrollPercentage
