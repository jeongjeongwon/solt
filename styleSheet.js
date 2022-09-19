function elementSize(element, width, height, boxSizing){
  element.style.width = width
  element.style.height = height
  element.style.boxSizing = boxSizing
}

function elementShape(element, backgroundColor, border, radius){
  element.style.backgroundColor = backgroundColor
  element.style.border = border
  element.style.borderRadius = radius
}

function elementText(element, color, align){
  element.style.color = color
  element.style.fontSize = font
  element.style.textAlign = align
}

function elementDisplay(element, display, justify, align){
  element.style.display = display
  element.style.justifyContent = justify
  element.style.alignItems = align
}

function elementImage(element, src, width, height, radius){
  element.src = src
  element.width = width
  element.height = height
  element.style.borderRadius = radius
}

function elementMarge(element, left, right, top, bottom){
  element.style.marginLeft = left
  element.style.marginRight = right
  element.style.marginTop = top
  element.style.marginBottom = bottom
}

export{elementSize, elementShape, elementText, elementDisplay, elementMarge}