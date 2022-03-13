
function validateInput(input) {

    let inputValue = input.value;
    let errorElement = input.nextElementSibling;

    let validations = {}

    if (input.required && inputValue === "") {
        errorElement.innerText = `Please fill ${input.name}`;
        validations[input.name] = false;
        button.setAttribute("disabled", true);
        console.log(validations);
        return;
    }
    let minLength = input.getAttribute('minlength');

    if (inputValue.length < minLength) {
        errorElement.innerText = `Minimum length for ${input.name} is ${minLength}`;
        validations[input.name] = false;
        button.setAttribute("disabled", true);
        console.log(validations);
        return;
    }

    let maxLength = input.getAttribute('maxlength');
    if (inputValue.length >= maxLength && maxLength) {
        errorElement.innerText = `Maximum length for ${input.name} is ${maxLength}`;
        validations[input.name] = false;
        button.setAttribute("disabled", true);
        console.log(validations);
        return;
    }
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
    if (input.type === 'email' && !emailRegex.test(inputValue)) {
        errorElement.innerText = `Email is not in valid format`;
        validations[input.name] = false;
        button.setAttribute("disabled", true);
        console.log(validations);
        return;
    }
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    if (input.type === 'password' && !passwordRegex.test(inputValue)) {
        errorElement.innerText = `Password has to have 1 uppercase letter, 1 number and 1 special char`;
        validations[input.name] = false;
        button.setAttribute("disabled", true);
        console.log(validations);
        return;
    }
    errorElement.innerText = '';
    validations[input.name] = true;
    let formValidBool = isFormValid();
    if (formValidBool) {
        button.removeAttribute('disabled');
    }
    // errorElement.innerText = '';
    // validations[input.name] = true;
    // let formValidBool = isFormValid();
    // if (formValidBool) {
    //     button.removeAttribute('disabled');
    // }
    // let validations = {}

    function isFormValid() {
        for (let key in validations) {
            let value = validations.key;
            if (value === false) {
                return false;
            }
        }
        return true;

    }
}