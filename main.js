import create from "./createElement.js"
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
//? sidebar는 매뉴를 구성하는 레이아웃이 들어갈 박스
//? centerbar는 주요 내용을 구성하는 레이아웃이 들어갈 박스
const sidebar = document.createElement('sidebar')
main.appendChild(sidebar)
const centerbar = document.createElement('centerbar')
main.appendChild(centerbar)

//* 생성자
create(sidebar, 'section')

//* style 지정
styleSheet(root, '100vw', '100vh', 'none', 'none', 'none', 'none', '0', 'none', 'inline', 'center');

styleSheet(header, '100vw', '10vh', 'dimgray', 'white', 'none', 'border-box', '0', '0', 'block', 'none');

styleSheet(main, '90vw', '75vh', 'gray', 'none', 'none', 'border-box', 'none', 'none', 'grid', 'center')

styleSheet(footer, '100vw', '10vh', 'dimgray', 'white', 'none', 'border-box', '0', 'none', 'flex', 'center')

styleSheet(sidebar, '85vw', '8vh', 'white', 'none', '1px solid black', 'border-box', '10px', 'none', 'flex', 'center')

styleSheet(centerbar, '85vw', '60vh', 'white', 'none', '1px solid black', 'border-box', '10px', 'none', 'flex', 'center')