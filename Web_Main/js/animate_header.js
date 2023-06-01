const clickBox = document.querySelector('.image-navigate');
const mainSection = document.querySelector('.main-section');
const testNavigate = document.querySelector('.text-navigate');

let isMoved = false;

function handleClick() {
  if (isMoved) {
    mainSection.classList.remove('show');
    testNavigate.style.display = 'block';
    mainSection.style.animation = 'slideOut 0.5s forwards';
    testNavigate.style.animation = 'slideIn 0.5s forwards';
    isMoved = false;
  } else {
    mainSection.classList.add('show');
    testNavigate.style.display = 'none';
    mainSection.style.animation = 'slideIn 0.5s forwards';
    testNavigate.style.animation = 'slideOut 0.5s forwards';
    isMoved = true;
  }
}

clickBox.addEventListener('click', handleClick);

const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('mouseover', () => {
    li.querySelector('a').classList.add('mouseover-animate');
  });

  li.addEventListener('mouseout', () => {
    li.querySelector('a').classList.remove('mouseover-animate');
  });
});