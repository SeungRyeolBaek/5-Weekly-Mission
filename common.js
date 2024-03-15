export {
  removeErrorMessage, 
  validateEmail, 
  users, 
  togglePasswordVisibility};

/*에러메세지가 떠 있는 경우 다시 focus했을 때 에러메세지 제거*/

function removeErrorMessage() {
  const emailErrorMessageEl = document.querySelector('.error-message-email');
  const passwordErrorMessageEl = document.querySelector('.error-message-password');

  emailErrorMessageEl.textContent = '';
  passwordErrorMessageEl.textContent = '';
}

/*email 유효성 검증*/

function validateEmail(event) {

  const emailInputEl = event.target;
  const emailValue = emailInputEl.value;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const errorMessageEl = document.querySelector('.error-message-email');

  if(emailValue === '') {
    errorMessageEl.textContent = "이메일을 입력해주세요";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else if(!regex.test(emailValue)) {
    errorMessageEl.textContent = "올바른 이메일 주소가 아닙니다";
    emailInputEl.classList.add('wrongsign');
    return false;
  } else {
    emailInputEl.classList.remove('wrongsign');
    return true;
  }
}


/*이메일: test@codeit.com 비밀번호: codeit101의 사용자 등록*/

const users = [
  {email: "test@codeit.com", password: "codeit101"}
];

/*눈 모양 아이콘

function togglePasswordVisibility() {
  const passwordInputEl = document.querySelector('.password-input');
  const eyeButtonEl = document.querySelector('.eye-button');

  if (passwordInputEl.type === "password") {
    passwordInputEl.type = "text";
    eyeButtonEl.innerHTML = '<img src="../image/eye-on.jpg" />';
  } else {
    passwordInputEl.type = "password";
    eyeButtonEl.innerHTML = '<img src="../image/eye-off.jpg" />';
  }
}*/

function togglePasswordVisibility() {
  const passwordInputEls = document.querySelectorAll('.password-input, .password-confirm-input');
  const eyeButtonEls = document.querySelectorAll('.eye-button');

  passwordInputEls.forEach((passwordInputEls, index) => {
    const eyeButtonEl = eyeButtonEls[index];

    if (passwordInputEls.type === "password") {
      passwordInputEls.type = "text";
      eyeButtonEl.innerHTML = '<img src="../image/eye-on.jpg" />';
    } else {
      passwordInputEls.type = "password";
      eyeButtonEl.innerHTML = '<img src="../image/eye-off.jpg" />';
    }
  });
}
