// 程式碼寫這裡
 const timer = document.querySelector('.timer')
 let defaultSeconds = 115
 let totalSeconds = 0
 let running = false
 let paused = false
 let timerID

function updateTimer(seconds){
    let mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    let secs = String(seconds % 60).padStart(2, '0')

    timer.textContent = `${mins}:${secs}`
    
    if (seconds == 0){
        timer.classList.add('times-up')
    }else{
        timer.classList.remove('times-up')
    }
}

function timesUp(){
    clearInterval(timerID)
    running = false
    updateTimer(0)
    playSound()        
}

function playSound(){
    const sound = new Audio('sounds/news.mp3')
    sound.play()
}

function initTimer(){
    running =true
    totalSeconds = defaultSeconds
    updateTimer(totalSeconds)
    setupTimer()
}

function setupTimer(){
    timerID = setInterval(() => {
        if (totalSeconds > 1){
            totalSeconds--
            updateTimer(totalSeconds)
        }else{
            timesUp()
        }
        
    }, 1000)
}

function pauseTimer(){
    paused = true
    clearInterval(timerID)
}

function resumeTimer(){
    paused = false
    setupTimer()
}

document.addEventListener('keyup' , (e) => {
    switch (e.key){
      case 'Enter':
        if(!running){
          initTimer()
        }
        break

      case " ":
        if (running){
          if (paused){
            resumeTimer()
          }else{
            pauseTimer()
          }  
        }
        break

    }
    
    
})
