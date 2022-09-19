import {elementSize, elementShape, elementText, elementDisplay} from "./styleSheet.js"
import {createElementList} from "./createElement.js"

// 기본 프레임 생성
const body = document.body
const root = document.getElementById('root')
const header = document.createElement('header')
root.appendChild(header)
const main = document.createElement('main')
root.appendChild(main)
const footer = document.createElement('footer')
root.appendChild(footer)

// 기본 프레임의 스타일 생성
elementSize(body, '100vw', '100vh', '0', '0')
elementDisplay(body, 'flex', 'center', 'center')

elementSize(header, '100vw', '10vh', '0', '0')
elementShape(header, 'skyblue', '0', '0')
elementDisplay(header, 'flex', 'center', 'center')

elementSize(main, '100vw', '80vh', '0', '0')
elementShape(main, 'white', '0', '0')
elementDisplay(main, 'flex', 'center', 'center')

elementSize(footer, '100vw', '10vh', '0', '0')
elementShape(footer, 'skyblue', '0', '0')
elementDisplay(footer, 'flex', 'center', 'center')

//header에 들어갈 내부 함수 구성
const first = document.createElement('img')
header.appendChild(first)
elementSize(first, "20%", "100%", "0", "border-box")
elementDisplay(first, 'flex', 'center', 'center')
const second = document.createElement('div')
header.appendChild(second)
elementSize(second, "60%", "100%", "0", "border-box")
elementDisplay(second, 'flex', 'center', 'center')
const third = document.createElement('div')
header.appendChild(third)
elementSize(third, "20%", "100%", "0", "border-box")
elementDisplay(third, 'flex', 'center', 'center')

// 사이트의 이름과 배너 구역
const venerImage = document.createElement('div')
first.appendChild(venerImage)
const venerText = document.createElement('div')
first.appendChild(venerText)
elementSize(venerImage, '50%', '100%', '0', 'border-box')
elementShape(venerImage, 'silver', '0', '50%')
elementSize(venerText, '50%', '100%', '0', 'border-box')

// 검색창
const searchbar = document.createElement('input')
second.appendChild(searchbar)
elementSize(searchbar, '90%', '50%', '0', 'border-box')
elementShape(searchbar, 'white', '0', '20px')

// 회원가입과 로그인 버튼
const login = document.createElement('button')
third.appendChild(login)
const signUp = document.createElement('button')
third.appendChild(signUp)
elementSize(login, '40%', '50%', '10px', 'border-box')
elementShape(login, 'white', '0', '20px')
elementSize(signUp, '40%', '50%', '10px', 'border-box')
elementShape(signUp, 'white', '0', '20px')

// main에 들어갈 내부 함수 설정
const mainframe = document.createElement('div')
main.appendChild(mainframe)
elementSize(mainframe, '80vw', '80vh', '0', '0')
const sidebar = document.createElement('div')
mainframe.appendChild(sidebar)
const mainbar = document.createElement('div')
mainframe.appendChild(mainbar)
elementSize(sidebar, '75vw', '10%', '10px', 'border-box')
elementDisplay(sidebar, 'flex', 'center', 'center')
elementSize(mainbar, '75vw', '85%', '10px', 'border-box')
elementShape(mainbar, "gainsboro", '0', '20px')
elementDisplay(mainbar, 'flex', 'center', 'center')

//sidebar 구성
const menuList = ["실종정보", "게시판", "메신저"]
createElementList(menuList, sidebar, 'section')
for(let i = 0; i < menuList.length; i++){
  const menus = sidebar.children[i]
  elementSize(menus, '20vw', '8vh', '10px', 'border-box')
  elementDisplay(menus, 'flex', 'center', 'center')
  elementShape(menus, 'dimgray', '1px solid black', '20px')
}

//mainbar 구성
const animelList = ["고양이", "강아지", "노루", "카나리아"]
createElementList(animelList, mainbar, 'section')
for(let i = 0; i < animelList.length; i++){
  const animel = mainbar.children[i];
  elementSize(animel, '20%', '90%', '10px', 'border-box')
  elementShape(animel, 'dimgray', '0', '20px')

  // animel 구성
  const animelImege = document.createElement('div')
  animel.appendChild(animelImege)
  const animelText = document.createElement('div')
  animel.appendChild(animelText)
  elementSize(animelImege, "90%", "60%", "10px", 'border-box')
  elementShape(animelImege, 'white', '0', '20px')
  elementSize(animelText, "90%", "30%", "10px", 'border-box')
  elementShape(animelText, 'white', '0', '20px')
  
}