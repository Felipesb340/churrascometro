function calc () {
  let adult = window.document.getElementById("adult").value
  let kids = window.document.getElementById("kids").value
  var duration = window.document.getElementById("duration").value
  let res = window.document.getElementById("res")
  let carne
  let cerveja

  if (duration <= 5) {
    carne = ((adult * 400) + (kids * 200))/1000
    cerveja = (adult * 6)/600
    refri = ((adult + kids) * 500)/2
  } else {
    carne = (adult * 650) + (kids * 325)
    cerveja = adult * 8
    refri = (adult + kids) * 1000
  }

  
  res.innerHTML += `<p>${carne} kg de carne</p>`
  res.innerHTML += `<p>${cerveja} garrafas de cerveja (600ml)</p>`
  res.innerHTML += `<p>${carne} garrafas de refrigerante (2L)</p>`
}
