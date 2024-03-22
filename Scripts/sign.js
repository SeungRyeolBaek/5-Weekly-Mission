// 경고 메세지 추가
export function makeWarningMsg(_text, pos) {
  if (pos.nextElementSibling.classList.contains("warningMsg")) {
    pos.nextElementSibling.remove();
  }
  const msg = document.createElement("p");
  msg.classList.add("warningMsg");
  msg.textContent = _text;
  pos.after(msg);
}

// 경고 메세지 제거
export function removeWarningMsg(e) {
  if (e.target.nextElementSibling.classList.contains("warningMsg")) {
    e.target.nextElementSibling.remove();
  }
  if (e.target.classList.contains("warningForm")) {
    e.target.classList.remove("warningForm");
  }
}

// 눈 모양 아이콘 클릭 시
export function visible(e) {
  e.target.classList.toggle("visible");
  if (e.target.classList.contains("visible")) {
    e.target.parentNode.firstElementChild.type = "text";
  } else {
    e.target.parentNode.firstElementChild.type = "password";
  }
}
