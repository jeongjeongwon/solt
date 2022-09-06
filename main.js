import styleSheet from "./styleSheet.js"

//* 기본 Layout 틀
const root = document.getElementById('root')
const header = document.createElement('header')
root.appendChild(header)
const main = document.createElement('main')
root.appendChild(main)
const footer = document.createElement('footer')
root.appendChild(footer)

//* 내부 Layout 구성
const sidebar = document.createElement('sidebar')
main.appendChild(sidebar)
const centerbar = document.createElement('centerbar')
header.appendChild(centerbar)

//* style 지정
styleSheet(root, '100vw', '100vh', 'none', 'none', 'none', 'none', '0', 'none', 'inline', 'center');
styleSheet(header, '100vw', '10vh', 'dimgray', 'white', 'none', 'border-box', '0', '0', 'block', 'none');
styleSheet(main, '90vw', '75vh', 'gray', 'none', 'none', 'border-box', 'none', 'none', 'flex', 'center')
styleSheet(footer, '100vw', '10vh', 'dimgray', 'white', 'none', 'border-box', '0', 'none', 'flex', 'center')
styleSheet(sidebar, '90vw', '8vh', 'white', 'none', 'none', 'border-box', '0', 'none', 'flex', 'center')

