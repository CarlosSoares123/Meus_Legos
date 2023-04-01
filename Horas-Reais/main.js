let addZeroes = num => {
  return num < 10 ? `0${num}` : num
}

let updateTime = () => {
  var dateToday = new Date()
  let hr = addZeroes(dateToday.getHours())
  let min = addZeroes(dateToday.getMinutes())
  let sec = addZeroes(dateToday.getSeconds())

  document.getElementById('time').textContent = `${hr}:${min}:${sec}`
}

// atualiza o tempo a cada segundo (1000 milissegundos)
setInterval(updateTime, 1000)
