// initial setup for the entire grid div
let setup = document.createElement('div');
setup.style.width = "50%"
setup.style.margin = "0 auto"
setup.style.textAlign = "center"
let color = "toast";
let downMouse;

// still attempting brush color status


directions()
desiredColor()
document.body.append(document.createElement('br'))
document.body.append(document.createElement('br'))
paletteSetup()
gridSetup(26.07) // Feel free to put in whatever grid size you want




function directions() {
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
  p.innerHTML = "Directions: Click on the color palette on the left to set a color! If there's missing a color that you want, type in the name or hexcode of the color desired!"
  p.style.textAlign = "center"
  p.style.fontFamily = "VT323, monospace"
  document.body.append(p)
}

function desiredColor() {
  // still attempting user-desired additional colors
  let div = document.createElement('div')
  div.classList.add('container')
  // div.classList.add('valign-wrapper')
  let input = document.createElement('input')
  let button = document.createElement('button')
  div.append(button)
  div.append(input)
  document.body.append(div)

  document.querySelector('input').setAttribute('id', 'color-text')
  document.querySelector('input').setAttribute('type', 'color')

  document.querySelector('button').setAttribute('id', 'moar-colors')
  document.getElementById('moar-colors').innerHTML = "Submit"
  document.getElementById('moar-colors').addEventListener('click', function() {
    let text = document.getElementById('color-text').value;
    color = text.toString()
    let span = document.createElement('span')
    span.innerText = `Your brush is currently: ${color}`
    document.body.append(span)
  })
}

function gridSetup(num) {
  for (i = 0; i < num * num; i++) {
    let gridBlock = document.createElement('div');
    gridBlock.style.float = 'left'
    gridBlock.style.paddingBottom = "2%"
    gridBlock.style.border = "1px solid black"
    gridBlock.style.width = "5%"
    gridBlock.innerHTML = ""
    gridBlock.addEventListener("mouseup", function() {
      downMouse = false;
      this.style.backgroundColor = color
    })

    gridBlock.addEventListener('mousedown', function() {
      downMouse = true;
    })

    gridBlock.addEventListener('mouseenter', function() {
      if (downMouse) {
        this.style.backgroundColor = color
      }
    })

    setup.append(gridBlock)
  }
  document.body.appendChild(setup)
}

function paletteSetup() {
  // original array of colors to choose from
  let arrayOfColors = ["red", "blue", 'black', "yellow", "orange", "green", 'white', "violet", "indigo"]
  let palettePlate = document.createElement('div')
  palettePlate.style.margin = '0 auto'
  palettePlate.style.textAlign = "center"
  palettePlate.style.width = "25%"
  palettePlate.style.display = "inline-block"
  palettePlate.style.float = "left"
    // palette.style.display = "block"
  arrayOfColors.forEach(function(element) {
    let palette = document.createElement('div')
    palette.style.textAlign = "center"
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
