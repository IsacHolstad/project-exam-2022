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
  
  let isFormValid = false;

  const validateInputs = () => {
    nameInput.classList.remove("invalid");
    nameInput.nextElementSibling.classList.add("hidden")
    isFormValid = true
    if (!nameInput.value) {
        nameInput.classList.add("invalid")
        nameInput.nextElementSibling.classList.remove("hidden")
        isFormValid = false;

    }
}

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateInputs();
      if (isFormValid) {
          form.remove();
          thankYou.classList.remove("hidden")
      }
      

  });
  nameInput.addEventListener('input', () =>{
      validateInputs();

  })