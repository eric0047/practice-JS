// 程式碼寫這裡

const carousel = document.querySelector('.carousel')
const slides = carousel.querySelectorAll('.slide')
const track = carousel.querySelector('.slide-track')
const prevBtn = carousel.querySelector('.prev-btn')
const nextBtn = carousel.querySelector('.next-btn')
const navigator = carousel.querySelector('.navigator')
const indicators = navigator.querySelectorAll('.indicator')
let currentIndex = 0


function setupSlides(){
    const w = track.clientWidth

    slides.forEach ((slide , i) => {
        slide.style.left = `${i * w}px`
    })

    updateNavigatorButtons(currentIndex)
   
}

function moveSlide(index){
  const w = track.clientWidth
  track.style.transform = `translateX(-${index * w}px)` //translate X 是代表橫向移動嗎?

  updateNavigatorButtons(index)
  updateIndicator(index)
}

function updateNavigatorButtons(index){
    if (index == 0){
      prevBtn.classList.add("hide")
      nextBtn.classList.remove("hide")
    }else if (index == slides.length-1){
      prevBtn.classList.remove("hide")
      nextBtn.classList.add("hide")  
    }else{
      prevBtn.classList.remove("hide")
      nextBtn.classList.remove("hide") 
    }
}

function updateIndicator(index) {
   indicators.forEach(indicator => {
      if (Number(indicator.dataset.index) == index){  // == 與 === 的差別
        indicator.classList.add('active')             //單引號與雙引號差別?
      }else{
        indicator.classList.remove('active')
      }
   })
}

nextBtn.addEventListener('click' , () => {
  currentIndex++

  moveSlide(currentIndex)
})

prevBtn.addEventListener('click' , () => {
    currentIndex--
  
    moveSlide(currentIndex)
  })

navigator.addEventListener('click', (e) => {
    if (e.target.matches('BUTTON')){
        const dot = e.target
        const dotIndex = Number(dot.dataset.index) //為何不值接使用e.target? 
        
        moveSlide(dotIndex)
    }
})




setupSlides()