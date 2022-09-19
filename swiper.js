const root = document.getElementById('root')
root.style.width = '100vw'
root.style.height = '100vh'
root.style.display = 'flex'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'

const arr = ['lightcoral', 'gray', 'skyblue', 'khaki']
for(let i = 0; i < arr.length; i++){
  const page = document.createElement('div')
  root.appendChild(page)
  page.style.width = '300px'
  page.style.height = '150px'
  page.style.backgroundColor = arr[i]
}

