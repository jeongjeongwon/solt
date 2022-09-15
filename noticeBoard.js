import {elementSize, elementShape, elementText, elementDisplay, elementMarge} from "./styleSheet.js"
import {createElementList} from "./createElement.js"

const root = document.getElementById('root') //! 전체 크기를 정함
elementSize(root, '100vw', '100vh', '0', 'border-box')

//! 위 배너와 버튼들이 위치하는 공간
const placeTop = document.createElement('div') 
root.appendChild(placeTop)
elementSize(placeTop, '100vw', '20vh', '0', 'border-box')
//! 사이트 이름이 위치
const vener = document.createElement('section')
placeTop.appendChild(vener)
elementSize(vener, '100vw', '10vh', '0', 'border-box')
elementShape(vener, 'skyblue', '0', '0')
elementDisplay(vener, 'flex', 'center', 'center')
//! header에 들어갈 내부 함수 구성
const first = document.createElement('img')
vener.appendChild(first)
elementSize(first, "20%", "100%", "0", "border-box")
elementDisplay(first, 'flex', 'center', 'center')
const second = document.createElement('div')
vener.appendChild(second)
elementSize(second, "60%", "100%", "0", "border-box")
elementDisplay(second, 'flex', 'center', 'center')
const third = document.createElement('div')
vener.appendChild(third)
elementSize(third, "20%", "100%", "0", "border-box")
elementDisplay(third, 'flex', 'center', 'center')
//! 사이트의 이름과 배너 구역
const venerImage = document.createElement('div')
first.appendChild(venerImage)
const venerText = document.createElement('div')
first.appendChild(venerText)
elementSize(venerImage, '50%', '100%', '0', 'border-box')
elementShape(venerImage, 'silver', '0', '50%')
elementSize(venerText, '50%', '100%', '0', 'border-box')
//! 검색창
const searchbar = document.createElement('input')
second.appendChild(searchbar)
elementSize(searchbar, '90%', '50%', '0', 'border-box')
elementShape(searchbar, 'white', '0', '20px')
//! 회원가입과 로그인 버튼
const login = document.createElement('button')
third.appendChild(login)
const signUp = document.createElement('button')
third.appendChild(signUp)
elementSize(login, '40%', '50%', '10px', 'border-box')
elementShape(login, 'white', '0', '20px')
elementSize(signUp, '40%', '50%', '10px', 'border-box')
elementShape(signUp, 'white', '0', '20px')
//! 각 페이지로 넘어가는 버튼
const tagPlace = document.createElement('section')
placeTop.appendChild(tagPlace)
elementSize(tagPlace, '100vw', '10vh', '0', 'border-box')
elementDisplay(tagPlace, 'flex', 'center', 'center')
//! 버튼 세부내용구현
const tagList = ["실종정보", "메인페이지", "메신저"]
createElementList(tagList, tagPlace, 'div')
for (let i = 0; i < tagList.length; i++){
  const selectTag = tagPlace.children[i];
  elementSize(selectTag, '20vw', '8vh', '20px', 'border-box')
  elementDisplay(selectTag, 'flex', 'center', 'center')
  elementShape(selectTag, 'dimgray', '1px solid black', '20px')
}

//! 게시판의 내용들이 출력되는 공간
const placeBottom = document.createElement('div')
root.appendChild(placeBottom)
elementSize(placeBottom, '100vw', '80vh', '0', 'border-box')
elementShape(placeBottom, 'silver', '1px solid black', '0')
//! 게시판 역할 공간 분할
const top = document.createElement('div')
placeBottom.appendChild(top)
elementSize(top, '100%', '10%', '0', 'border-box')
elementDisplay(top, 'flex', 'end', 'center')
const mid = document.createElement('div')
placeBottom.appendChild(mid)
elementSize(mid, '100%', '80%', '0', 'border-box')
const bottom = document.createElement('div')
placeBottom.appendChild(bottom)
elementSize(bottom, '100%', '10%', '0', 'border-box')
elementShape(bottom, 'azure', '0', '0')
//! 게시판 내용 생성 버튼
const createBoard = document.createElement('button')
top.appendChild(createBoard)
elementSize (createBoard, '5%', '50%', '15px', 'border-box')
//! 게시판 내용
const boardList = []
const noticeBoard = document.createElement('section')
mid.appendChild(noticeBoard)
elementSize(noticeBoard, '100%', '30%', '0', 'border-box')
elementShape(noticeBoard, 'gray', '1px solid black', '0')
elementDisplay(noticeBoard, 'flex', 'center', 'center')
//! 게시판 이미지와 내용 구역 분단
const boardImg = document.createElement('div')
noticeBoard.appendChild(boardImg)
elementSize(boardImg, '25%', '100%', '0', 'border-box')
elementShape(noticeBoard, 'white', '1px solid black', '0')
const boardMainText = document.createElement('div')
noticeBoard.appendChild(boardMainText)
elementSize(boardMainText, '75%', '100%', '0', 'border-box')
//! 게시판 제목과 본문 구역
const boardTitle = document.createElement('div')
boardMainText.appendChild(boardTitle)
elementSize(boardTitle, '100%', '25%', '0', 'border-box')
elementShape(boardTitle, 'white', '1px solid black', '0')
const boardText = document.createElement('div')
boardMainText.appendChild(boardText)
elementSize(boardText, '100%', '75%', '0', 'border-box')
elementShape(boardText, 'white', '1px solid black', '0')