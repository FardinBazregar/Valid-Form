function validateName() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameValue = nameInput.value.trim();

  if (nameValue.length > 15 || !/^[a-zA-Z]+$/.test(nameValue)) {
    nameInput.classList.add("error");
    nameError.classList.add("show");
  } else {
    nameInput.classList.remove("error");
    nameError.classList.remove("show");
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("error");
    emailError.classList.add("show");
  } else {
    emailInput.classList.remove("error");
    emailError.classList.remove("show");
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordValue = passwordInput.value.trim();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(passwordValue)) {
    passwordInput.classList.add("error");
    passwordError.classList.add("show");
  } else {
    passwordInput.classList.remove("error");
    passwordError.classList.remove("show");
  }
}

function submitForm() {
  validateName();
  validateEmail();
  validatePassword();

  const form = document.getElementById("myForm");
  const successAnimationClass = "success-animation";

  if (!form.classList.contains(successAnimationClass)) {
    form.classList.add(successAnimationClass);

    // تاخیر برای انتظار انجام انیمیشن
    setTimeout(() => {
      form.classList.remove(successAnimationClass);
    }, 2000);
  }
}
