function createElementList(list, parent, child){
  for(let i = 0; i < list.length; i++){
    let create = document.createElement(child)
    create.textContent = list[i]
    parent.appendChild(create)
  }
}

export{createElementList}