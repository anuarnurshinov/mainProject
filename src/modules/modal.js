const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')
    const popupContent = modal.querySelector('.popup-content')
    let count = 0
    let idInterval


    const animation = () => {
        if (document.documentElement.clientWidth > 786) {
            count++
            idInterval = requestAnimationFrame(animation)
            modal.style.display = 'block'
            if (count < 20) {
                popupContent.style.left = `${count*2}%`
            } else {
                cancelAnimationFrame(idInterval)
                count = 0
            }
        } else {
            modal.style.display = 'block'
        }


    }

    buttons.forEach(btn => {
        btn.addEventListener('click', animation)
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}
export default modal