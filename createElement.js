export default function createElement(parent, section){
  let menus = ["유기동물", "게시판", "메신저", "홈페이지 소개"]
  for(let i = 0; i < menus.length; i++){
    let create = document.createElement(section)
    parent.appendChild(create)
  }
}