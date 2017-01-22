



// initial setup for the entire grid div
let setup = document.createElement('div');
setup.style.width = "50%"
setup.style.margin = "0 auto"
setup.style.textAlign = "center"
let color = "nothing"


paletteSetup()
gridSetup(24) // Feel free to put in whatever grid size you want

function gridSetup(num) {
  for (i = 0; i < num * num; i++) {
    let gridBlock = document.createElement('div');
    gridBlock.style.float = 'left'
    gridBlock.style.paddingBottom = "2%"
    gridBlock.style.border = "1px solid black"
    gridBlock.style.width = "5%"
    gridBlock.style.height = "5%"
    gridBlock.innerHTML = "&nbsp;"
    gridBlock.addEventListener("click", function() {
      gridBlock.style.backgroundColor = color
    })
    setup.append(gridBlock)
  }
  document.body.appendChild(setup)
}

function paletteSetup() {
  let arrayOfColors = ["red", "blue", 'black', "yellow", "orange", "green", 'white', "violet", "indigo"]
  let palettePlate = document.createElement('div')
  palettePlate.style.margin = '0 auto'
  palettePlate.style.textAlign = "center"
  palettePlate.style.width = "25%"
  palettePlate.style.display = "inline-block"
  palettePlate.style.float = "left"
  arrayOfColors.forEach(function(element) {
    let palette = document.createElement('div')
    palette.style.textAlign = "center"
    // palette.style.display = "block"
    palette.style.float = "right"
    palette.style.width = "250px"
    palette.style.margin = "0 auto"
    palette.style.backgroundColor = element
    palette.innerHTML = "&nbsp;"
    palette.addEventListener("click", function() {
      color = element
    })
    palettePlate.append(palette)
  })
  document.body.appendChild(palettePlate)
}

// directions/documentation
//
// Note: I definitely could have done this in html but I wanted to try making it all
// through JS DOM Creation
let h1 = document.createElement('h1');
h1.innerHTML = "Pixel Pixel"
h1.style.textAlign = "center"
h1.style.fontFamily = "VT323, monospace"
document.body.append(h1)

let p = document.createElement('p');
p.innerHTML = "Directions: Click on the color palette on the left to set a color! If there's missing a color that you want. Type in the name or hexcode of the color desired!"
p.style.textAlign = "center"
p.style.fontFamily = "VT323, monospace"
document.body.append(p)


// still attempting user-desired additional colors
let input = document.createElement('input')
document.body.append(input)
document.querySelector('input').setAttribute('type', 'text')
document.querySelector('input').setAttribute('placeholder', 'Desired Color!')
document.querySelector('input').setAttribute('id', 'color-text')

let button = document.createElement('button')
document.body.append(button)
document.querySelector('button').setAttribute('id', 'moar-colors')
document.getElementById('moar-colors').innerHTML = "Submit"
document.getElementById('moar-colors').addEventListener('click', function() {
  let text = document.getElementById('color-text').value;
  arrayOfColors.push(text.toString())
})

let br = document.createElement('br')
let br1 = document.createElement('br1')
document.body.append(br)
document.body.append(br1)

// still attempting brush color status
let span = document.createElement('span')
span.innerHTML = "Your brush is currently: "
span.innerHTML += color
document.body.append(span)
