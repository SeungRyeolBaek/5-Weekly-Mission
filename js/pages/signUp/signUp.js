import {
  emailInput,
  pwInput,
  confirmPw,
  emailErrorElement,
  passwordErrorElement,
  confirmErrorElement,
  signForm,
  togglePasswordVisibility,
  toggleConfirmVisibility,
} from "./ui.js";
import {
  validateEmail,
  validatePassword,
  checkDuplicateEmail,
  validateConfirmPassword,
} from "../../utils/validation.js";
import {
  showMessage,
  togglePassword,
  displayErrorMessage,
  clearInput,
} from "../../utils/ui.js";
import { messages } from "../../contants/contants.js";

emailInput.addEventListener("focusout", () => {
  onEmailFocusOut(emailInput, emailErrorElement);
});

function onEmailFocusOut(emailInput, emailErrorElement) {
  const email = emailInput.value;
  const [isValidEmail, emailErrorMessage] = validateEmail(email);

  if (!checkDuplicateEmail(email)) {
    return displayErrorMessage(
      emailInput,
      emailErrorElement,
      messages.EMAIL_DUPLICATE
    );
  }
  if (isValidEmail) {
    return clearInput(emailInput, emailErrorElement);
  }
  displayErrorMessage(emailInput, emailErrorElement, emailErrorMessage);
}

pwInput.addEventListener("focusout", () => {
  onPasswordFocusOut(pwInput, passwordErrorElement);
});

function onPasswordFocusOut(pwInput, passwordErrorElement) {
  const password = pwInput.value;
  const [isValidPassword, passwordErrorMessage] = validatePassword(password);

  if (isValidPassword) {
    return clearInput(pwInput, passwordErrorElement);
  }
  displayErrorMessage(pwInput, passwordErrorElement, passwordErrorMessage);
}

confirmPw.addEventListener("focusout", () =>
  onConfirmFoucsOut(pwInput, confirmPw)
);

function onConfirmFoucsOut(pwInput, confirmPw) {
  const password = pwInput.value;
  const confirmPassword = confirmPw.value;
  const [isValid, message] = validateConfirmPassword(password, confirmPassword);

  if (isValid) {
    return clearInput(confirmPw, confirmErrorElement);
  }
  displayErrorMessage(confirmPw, confirmErrorElement, message);
}

togglePasswordVisibility.addEventListener("click", () =>
  togglePassword(pwInput, togglePasswordVisibility)
);
toggleConfirmVisibility.addEventListener("click", () =>
  togglePassword(confirmPw, toggleConfirmVisibility)
);

signForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');
  const pwInput = form.querySelector('input[type="password"]');
  const emailErrorElement = form.querySelector("#email-error-message");
  const passwordErrorElement = form.querySelector("#pw-error-message");

  submitRegisterForm(
    emailInput,
    pwInput,
    confirmPw,
    emailErrorElement,
    passwordErrorElement,
    confirmErrorElement
  );
});

export function submitRegisterForm(emailInput, pwInput, confirmPw) {
  const isEmailInputValid = validateEmail(emailInput.value);
  const isPasswordInputValid = validatePassword(pwInput.value);
  const isConfirmPasswordInputValid = validateConfirmPassword(
    pwInput.value,
    confirmPw.value
  );
  if (
    isEmailInputValid &&
    isPasswordInputValid &&
    isConfirmPasswordInputValid
  ) {
    location.href = "./folder.html";
  }
}
