const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };
  const form = document.querySelector('form')
  const thankYou = document.querySelector('.thankyou')

  const nameInput = document.querySelector('input[name="name"]');

  const emailInput = document.querySelector('input[name="email"]');

  const phoneInput = document.querySelector('input[name="phone"]');

  const messageInput = document.querySelector('textarea[name="message"]')

  let shouldValidate = false;
  let isFormValid = false;

  const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden")
  }
const inputs = [
    nameInput,
    emailInput,
    phoneInput,
    messageInput,
]

  const invaliDateElm = (elm) => {
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden")
  }

  const validateInputs = () => {
      ///if (!isValidationOn) return;
    isFormValid = true;
    inputs.forEach(resetElm)

    if (!nameInput.value) {
        isFormValid = false;
        invaliDateElm(nameInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invaliDateElm(emailInput);
    }
    if (!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invaliDateElm(phoneInput);
    }
    if (!messageInput.value) {
        isFormValid = false;
        invaliDateElm(messageInput);
    }
};


  form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateInputs();
      if (isFormValid) {
          form.remove();
          thankYou.classList.remove("hidden")
      }
      

  });
  inputs.forEach((input) => {
    input.addEventListener("input", () =>{
        validateInputs();
  
    });

  })
 