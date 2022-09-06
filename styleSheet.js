export default function styleSheet(element, width, height, backgroundColor, color, border, boxSizing, margin, font, display, center){
  element.style.width = width
  element.style.height = height
  element.style.backgroundColor = backgroundColor
  element.style.color = color
  element.style.border = border
  element.style.boxSizing = boxSizing
  element.style.margin = margin
  element.style.fontSize = font
  element.style.display = display
  element.style.justifyContent = center
  element.style.alignItems = center
}