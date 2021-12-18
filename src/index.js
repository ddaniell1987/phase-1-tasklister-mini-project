document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.create-task-form.value)
    form.reset
  })
})
function buildToDo(todo){
  console.log(todo)
  let p = document.createElememt('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}