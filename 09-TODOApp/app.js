// 程式碼寫這裡
// document.addEventListener('DOMContentLoaded', () => {
//     const addBtn = document.querySelector('#addBtn')
//     const taskInput = document.querySelector('#taskInput')
//     const todoList = document.querySelector('.todo-list')

//     const createTaskItem = () => {
//         const task = taskInput.value
//         const todoItem = `<li class="todo-item">
//         <span class="item"> ${task} </span>
//         <button class="closeBtn">X</button>
//       </li>`

      
//       if(taskInput.value == '' || ' '.length >= 1){
//         alert('待辦事項不得為空白')
        
//       }else{
       
//         todoList.insertAdjacentHTML('afterbegin',todoItem)
//         taskInput.value = ''
//         taskInput.focus()

//       }
      
      
//     }
    

//     addBtn.addEventListener('click', () => {
//        createTaskItem()
//     })

//     taskInput.addEventListener('keypress', (e) => {
//         if(e.key == 'Enter'){
//             createTaskItem()
//         }
//     })

    
//     todoList.addEventListener('click', (e) => {
//        if(e.target.nodeName == 'BUTTON'){
//         e.target.parentNode.remove()
//         alert('已刪除待辦事項')
//        }
//     })
    
    
// })


document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#taskInput')
    const addBtn = document.querySelector('#addBtn')
    const todoList = document.querySelector('.todo-list')

    const createTaskInput = () => {
        const task = taskInput.value
        const todoItem = `<li class="todo-item">
        <span class="item"> ${task} </span>
        <button class="closeBtn">X</button>
      </li>`

        todoList.insertAdjacentHTML('afterbegin', todoItem)
        taskInput.value = ''
        taskInput.focus()
    }

    addBtn.addEventListener('click', () => {
        createTaskInput()
    })

    taskInput.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            createTaskInput()
        }
    })


    todoList.addEventListener('click', (e) => {
        if(e.target.nodeName == 'BUTTON'){
            e.target.parentNode.remove()
            alert('已刪除待辦事項')
        }
    })
})