import {
    animate
} from "./helper"

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const popupContent = modal.querySelector('.popup-content')
    let bounceEaseOut

    const animation = () => {
        modal.style.display = 'block'
        animate({
            duration: 1500,
            timing: bounceEaseOut,
            draw: function (progress) {
                popupContent.style.left = progress * 40 + '%';
            }
        });
    }

    const makeEaseOut = (timing) => {
        return function (timeFraction) {
            return 1 - timing(1 - timeFraction);
        }
    }

    const bounce = (timeFraction) => {
        for (let a = 0, b = 1; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
            }
        }
    }




    buttons.forEach(btn => {
        bounceEaseOut = makeEaseOut(bounce);
        btn.addEventListener('click', animation)
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

}
export default modal