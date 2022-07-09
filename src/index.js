import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validator from './modules/validator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
import scroller from './modules/scroller'

timer('11 july 2022 10:00')
menu()
modal()
validator()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})
scroller()