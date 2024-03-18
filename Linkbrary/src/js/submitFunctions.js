import validateLogin from "./loginValidation";
import validateSignUp from "./signUpValidation";
export function signInSubmit() {
  validateLogin(
    document.querySelector("#user-email"),
    document.querySelector("#password")
  );
}

export function signUpSubmit() {
  validateSignUp(
    document.querySelector("#user-email"),
    document.querySelector("#password"),
    document.querySelector("#password-check")
  );
}
