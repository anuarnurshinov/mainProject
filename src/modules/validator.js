const validator = () => {
    const calculatorInputsCollection = document.querySelectorAll('.calc-block>input')
    const topInputContainer = document.querySelector('.main-form-input')
    const bottomInputContainer = document.querySelector('.footer-form-input')
    const bottomInputCollection = bottomInputContainer.querySelectorAll('input')
    const topInputCollection = topInputContainer.querySelectorAll('input')

    const numberValidator = (input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '')
        })
    }

    const cyrillicValidator = (e) => {
        e.target.value = e.target.value.replace(/[^А-я-=]/, '')
    }
    const emeilValidator = (e) => {
        e.target.value = e.target.value.replace(/[^A-z@-_.!~*'\d]/, '')
    }
    const telephoneValidator = (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/, '')
    }

    calculatorInputsCollection.forEach(numberValidator)
    bottomInputCollection[3].addEventListener('input', cyrillicValidator)
    bottomInputCollection[0].addEventListener('input', cyrillicValidator)
    topInputCollection[0].addEventListener('input', cyrillicValidator)
    topInputCollection[1].addEventListener('input', emeilValidator)
    bottomInputCollection[1].addEventListener('input', emeilValidator)
    topInputCollection[2].addEventListener('input', telephoneValidator)
    bottomInputCollection[2].addEventListener('input', telephoneValidator)
}
export default validator