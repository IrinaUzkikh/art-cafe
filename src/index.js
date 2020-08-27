import "./style.css";

const blockTopLeft = document.querySelector('#blockTopLeft');
const blockTopRight = document.querySelector('#blockTopRight');
const blockBottomLeft = document.querySelector('#blockBottomLeft');
const blockBottomRight = document.querySelector('#blockBottomRight');
const blockForm = document.querySelector('#blockForm');

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    blockForm.classList.remove('popup_is-opened');
  }
}) 

blockTopLeft.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})

blockTopRight.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})

blockBottomLeft.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})

blockBottomRight.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})



