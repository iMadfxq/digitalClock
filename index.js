const root = document.querySelector('#root')

const tick = () => {
  const timeNow = new Date()

  let s = timeNow.getSeconds()
  let m = timeNow.getMinutes()
  let h = timeNow.getHours()

  const html = `
  <span>${h} :</span>
  <span>${m} :</span>
  <span>${s}</span>
  `

  root.innerHTML = html
}

setInterval(tick, 1000)