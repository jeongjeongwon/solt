import {elementSize, elementShape, elementText, elementDisplay, elementMarge} from  "./styleSheet.js"
//! 전체 틀
const root = document.getElementById('root')
elementSize(root, '100vw', '100vh', 'border-box')
//! 3개의 섹션 구현
const sectorTitle = document.createElement('div')
root.appendChild(sectorTitle)
elementSize(sectorTitle, '100vw', '10vh', 'border-box' )
elementMarge(sectorTitle, '0', '0', '10px', '10px')
elementShape(sectorTitle, 'gray', '0', '0')
sectorTitle.textContent = "제목"
const sectorAssistant = document.createElement('div')
root.appendChild(sectorAssistant)
elementSize(sectorAssistant, '100vw', '5vh', 'border-box' )
elementMarge(sectorAssistant, '0', '0', '10px', '10px')
elementShape(sectorAssistant, 'gray', '0', '0')
elementDisplay(sectorAssistant, 'flex', '0', '0')
const sectorMainPage = document.createElement('div')
root.appendChild(sectorMainPage)
elementSize(sectorMainPage, '100vw', '83vh', 'border-box' )
elementMarge(sectorMainPage, '0', '0', '10px', '0')
elementShape(sectorMainPage, 'gray', '0', '0')
elementDisplay(sectorMainPage, 'flex', '0', '0')
//!sectorAssistant에 삽입될 작성자, 로그인
const writer = document.createElement('div')
sectorAssistant.appendChild(writer)
elementSize(writer, '50%', '100%', 'border-box')
writer.textContent = "작성자"

//! sectorMainPage에 삽입될 주요 내용과 이미지
const sectorImage = document.createElement('section')
sectorMainPage.appendChild(sectorImage)
elementSize(sectorImage, '40%', '70%', 'border-box' )
elementMarge(sectorImage, '10px', '10px', '10px', '0')
elementShape(sectorImage, 'white', '0', '0')
sectorImage.textContent = "작성자"
const sectorText = document.createElement('section')
sectorMainPage.appendChild(sectorText)
elementSize(sectorText, '60%', '95%', 'border-box' )
elementMarge(sectorText, '0', '10px', '10px', '0')
elementShape(sectorText, 'white', '0', '0')
sectorText.textContent = "본문"