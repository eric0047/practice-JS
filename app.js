// const d1 = document.getElementById('doll-1')
// const d2 = document.querySelector('#doll-1')

// console.log(d1)
// console.log(d2)

// const d3 = document.getElementsByClassName('doll')
// const d4 = document.querySelectorAll('#doll')

// console.log(d3)
// console.log(d4)


// const btn = document.querySelector('#btn')

// // btn.addEventListener('click' , function () { console.log('測試')}   )

// const clickMe = () => { console.log('測試') }

// btn.addEventListener('click' , clickMe )

// document.addEventListener('DOMContentLoaded' , () => { })



// const hello = document.querySelector('#hello')

// const h = document.createElement('h3')

// h.textContent = 'say hi'

// hello.appendChild(h)


// const btn = document.querySelector('#removeBtn')

// btn.addEventListener('click' , () => {
//   const LastOne = document.querySelector('li:last-child')

//   if(LastOne){
//     // const u = document.querySelector('ul')
//     // u.removeChild(LastOne)

//    LastOne.insertAdjacentElement() 
//   }
  
// })
// const api = 'https://jsonplaceholder.typicode.com/posts'

// const req = new XMLHttpRequest()

// req.addEventListener('load', () => {
//     const posts = JSON.parse(req.responseText)
  
//     posts.forEach( (post) =>{
//         console.log(post.title)
//     })
// })

// req.open('GET', api)

// req.send()



// fetch(api)
//   .then((resp) => {
//     return resp.json()
//   })
//   .then((data) => {
//     data.forEach((d) => {
//         console.log(d.title)
//     })
//   })



//   async function getPost() {
//     const resp = await fetch(api)
//     const posts = await resp.json() 

//     posts.forEach((post) => {
//        console.log(post.title)
//     })
//   }

//  getPost()
//  console.log('go!')

// document.addEventListener('DOMContentLoaded', () => {
//   const hero = document.querySelector('#hero')
//   console.log(hero)
// })

// $().ready(() => {
//   const hero = $('#hero')
//   hero.html('hi')
//   console.log(hero)
// })

const url = 'https://jsonplaceholder.typicode.com/posts'

$.ajax({url}).done((posts) => {
  posts.forEach((post) => {
    console.log(post.title)
  })
})


