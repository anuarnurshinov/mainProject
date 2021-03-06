const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const caclSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')



    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = caclSquare.value
        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }
        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10
        }
        if (calcType.value && caclSquare.value) {
            totalValue = Math.ceil(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        } else {
            totalValue = 0
        }
        total.textContent = totalValue

    }
    calcBlock.addEventListener('input', (e) => {
        countCalc()
    })
}

export default calc