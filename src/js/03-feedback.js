import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')
const email = form.email
const message = form.message

function onFormInput(evt) {
    const formData =  {
        email: email.value, 
        message: message.value
    }
    const formDataStringified = JSON.stringify(formData)
    localStorage.setItem("feedback-form-state", formDataStringified)
}

const throttledOnFormInput = throttle(onFormInput, 500)

function onFormSubmit(evt) {
    evt.preventDefault()
    console.log({
        email: email.value,
        message: message.value
    })
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
}

function populateFormInputs() {
    const savedInputs = JSON.parse(localStorage.getItem("feedback-form-state"))
    if(savedInputs) {
        email.value = savedInputs.email
        message.value = savedInputs.message
    }
}


populateFormInputs()

form.addEventListener('input', throttledOnFormInput)

form.addEventListener('submit', onFormSubmit)





