const formTodo=document.querySelector(".form-todo")
const todoInputs=document.querySelector(".form-todo input[type='text']")
const todoList=document.querySelector(".todo-list")
formTodo.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTodoText=todoInputs.value
    const newli=document.createElement("li")
    const newInnerHtml=`<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
   newli. innerHTML=newInnerHtml
   todoList.append(newli)
   todoInputs.value=""
})
todoList.addEventListener("click",(e)=>{
    if (e.target.classList.contains("remove")) {
        const targtedli=e.target.parentNode.parentNode
        targtedli.remove()
    }
    if (e.target.classList.contains("done")) {
        const doneLi=e.target.parentNode.previousElementSibling
        doneLi.style.textDecoration="line-through"
    }
})