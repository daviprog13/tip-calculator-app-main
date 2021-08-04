const formularios = document.forms;
const calculations = formularios[0]
const resultado = formularios[1]
const custom = calculations.querySelectorAll('#custom')
const botoes = calculations.querySelectorAll('.teclado-botao')
const btnReset = document.querySelector('[data-button]')
const events = ['click', 'touckstart']
    /* calc Custom */
function handleCustom(event) {
    const conta = +calculations.querySelector('#bill').value
    const pessoa = +calculations.querySelector('#people').value
    const valorPorcento = +(event.target.value / 100)
    const tip = +(conta / pessoa * valorPorcento).toFixed(2)
    const tipText = resultado.querySelector('#tip')
    const total = +(conta / pessoa)
    const totalText = resultado.querySelector('#total')
    tipText.value = (tip || tipCustomTarget).toFixed(2)
    totalText.value = (total + (+(tipText.value))).toFixed(2)
}

custom.forEach(cust => {
    cust.addEventListener('keyup', handleCustom)
})



/* calc sem custom */
function calc(event) {
    const conta = +calculations.querySelector('#bill').value
    const pessoa = +calculations.querySelector('#people').value
    const valorPorcento = +(event.target.innerText.replace('%', '') / 100)
    const tip = +(conta / pessoa * valorPorcento).toFixed(2)
    const tipText = resultado.querySelector('#tip')
    const total = +(conta / pessoa)
    const totalText = resultado.querySelector('#total')
    tipText.value = (tip || tipCustomTarget).toFixed(2)
    totalText.value = (total + (+(tipText.value))).toFixed(2)
}
botoes.forEach(botao => {
    botao.addEventListener('click', calc)
})

/* botao reset */
events.forEach(events => {
    function reset(event) {
        event.preventDefault()
        const inputCalculation = calculations.querySelectorAll('[placeholder]')
        const inputResultado = resultado.querySelectorAll('[placeholder]')
        inputCalculation.forEach(input => {
            input.value = ''
            input.placeholder = input.placeholder
        })
        inputResultado.forEach(input => {
            input.value = ''
            input.placeholder = input.placeholder
        })
        numberPeople.classList.remove('ativo')
        cantBe.classList.remove('ativo')
    }
    btnReset.addEventListener(events, reset)
})

/* borda Vermelha*/
const numberPeople = document.querySelector('#people')
const cantBe = document.querySelector('.position-icon span')

function handleKeyup(event) {
    if (numberPeople.value != true) {
        numberPeople.classList.add('ativo')
        cantBe.classList.add('ativo')
    }
    if (numberPeople.value === '') {
        numberPeople.classList.remove('ativo')
        cantBe.classList.remove('ativo')
    }

}
numberPeople.addEventListener('keyup', handleKeyup)