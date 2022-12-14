import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')
const email = form.email
const message = form.message
const STORAGE_KEY = "feedback-form-state"
let formData = {}
function onFormInput() {
    formData = {
        email: email.value,
        message: message.value
    }
    const formDataStringified = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, formDataStringified)
}

const throttledOnFormInput = throttle(onFormInput, 500)

function onFormSubmit(evt) {
    evt.preventDefault()
    if(email.value === '' || message.value === '') {
        console.log('Fill all inputs, please')
    } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    }
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function populateFormInputs() {
    const savedInputs = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(savedInputs) {
        email.value = savedInputs.email,
        message.value = savedInputs.message
    }
}


populateFormInputs()

form.addEventListener('input', throttledOnFormInput)

form.addEventListener('submit', onFormSubmit)





