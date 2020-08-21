import "./style.css";

const menuTopLeft = document.querySelector('#menuTopLeft');
const menuTopRight = document.querySelector('#menuTopRight');
const menuBottomLeft = document.querySelector('#menuBottomLeft');
const menuBottomRight = document.querySelector('#menuBottomRight');
const blockTopLeft = document.querySelector('#blockTopLeft');
const blockTopRight = document.querySelector('#blockTopRight');
const blockBottomLeft = document.querySelector('#blockBottomLeft');
const blockBottomRight = document.querySelector('#blockBottomRight');
const termsOfDelivery = document.querySelector('#termsOfDelivery');
const blockTermsOfDelivery = document.querySelector('#blockTermsOfDelivery');
const blockForm = document.querySelector('#blockForm');

 document.addEventListener('keydown', (e) => {
   console.log('1111111111');
    if (e.keyCode === 27) {
      blockForm.classList.remove('popup_is-opened');
    }
  }) 

blockTopLeft.addEventListener('click', () => {
  console.log('22222');
  console.log(blockTopLeft);
  blockForm.classList.add('popup_is-opened');
})


blockTopRight.addEventListener('click', () => {
  console.log('22222');
  console.log(blockTopLeft);
  blockForm.classList.add('popup_is-opened');
})
blockBottomLeft.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})
blockBottomRight.addEventListener('click', () => {
  blockForm.classList.add('popup_is-opened');
})
/*
document.querySelector('#popupTopLeft').addEventListener('click', (event) => {
  event.target.closest('.popup').classList.remove('popup_is-opened');
})

document.querySelector('#popupTopRight').addEventListener('click', (event) => {
    event.target.closest('.popup').classList.remove('popup_is-opened');
})

document.querySelector('#popupBottomLeft').addEventListener('click', (event) => {
    event.target.closest('.popup').classList.remove('popup_is-opened');
  })

document.querySelector('#popupBottomRight').addEventListener('click', (event) => {
    event.target.closest('.popup').classList.remove('popup_is-opened');
})*/
  


