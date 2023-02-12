// 程式碼寫在這裡
document.addEventListener('DOMContentLoaded' , () => {

const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const counter = document.querySelector('#counter')


plusBtn.addEventListener('click' , () =>  { 
    let v = Number(counter.value)
    v = v + 1
    counter.value = v
    console.log(counter.value)
     
} )
minusBtn.addEventListener('click' , () =>  {
    // let v = Number(counter.value)
    let v = parseInt(counter.value)

    if (v > 0){
      v = v - 1
      counter.value = v
    }
 } )



})
