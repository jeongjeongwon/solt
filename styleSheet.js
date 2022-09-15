function elementSize(element, width, height, margin, boxSizing){
  element.style.width = width
  element.style.height = height
  element.style.margin = margin
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

function elementMarge(element, left, bottom){
  element.style.margeLeft = left
  element.style.margeBottom = bottom
}

export{elementSize, elementShape, elementText, elementDisplay, elementMarge}