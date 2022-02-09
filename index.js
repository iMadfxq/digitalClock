const root = document.querySelector('#root')

const tick = () => {
  const dateObject = new Date()
  const time = dateObject.toTimeString().slice(0, 8)  //it would print GMT if I didn't slice it

  const html = `
    <span>${time}</span>
  `

  root.innerHTML = html
}

setInterval(tick, 1000)