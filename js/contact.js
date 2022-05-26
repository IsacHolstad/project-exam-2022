const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const form = document.querySelector('form')
  const thankYou = document.querySelector('.thankyou')

  const nameInput = document.querySelector('input[name="name"]');

  const emailInput = document.querySelector('input[name="email"]');
  
  let isFormValid = false;

  const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden")
  }
const inputs = [
    nameInput,
    emailInput,
]

  const invaliDateElm = (elm) => {
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden")
  }

  const validateInputs = () => {
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput)
    if (!nameInput.value) {
        isFormValid = false;
        invaliDateElm(nameInput);
    }
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invaliDateElm(emailInput);
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
 