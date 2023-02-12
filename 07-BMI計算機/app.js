// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener('DOMContentLoaded', () => {
    const height = document.querySelector('#bodyHeight')
    const weight = document.querySelector('#bodyWeight')
    const CalculateBtn = document.querySelector('#btn')
    const result = document.querySelector('#resultText')

    CalculateBtn.addEventListener('click' , () => {
        let h = Number(height.value)/100.0
        let w = Number(weight.value)
        bmi = Math.round(w / (h * h)*100)*0.01
        result.textContent = bmi
    })


})
