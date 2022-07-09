const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер свяжется с вами!'


    const sendData = async (data) => {

        if (data.user_name.length > 1 && data.user_phone > 6) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await res.json()
        } else {
            successText = 'Данные не подходят, для отправки'
        }
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        statusBlock.style.color = 'white'
        form.append(statusBlock)

        formData.forEach((val, key) => {
            if (val != '') {
                formBody[key] = val
            }
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block' && element.textContent > 0) {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.Value
            }
        })


        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста))')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}
export default sendForm