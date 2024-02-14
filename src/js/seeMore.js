const content = document.querySelector('.services__text-wrapper');
const breakPoint = window.matchMedia('(min-width: 767px)');
const button = document.querySelector('.view-all-button');

if (breakPoint.matches) {
  content.children[1].hidden = false;
}

breakPoint.addEventListener('change', () => {
  if (breakPoint.matches) {
    content.children[1].hidden = false;
  } else {
    content.children[1].hidden = true;
  }
});

button.addEventListener('click', () => {
  if (content.classList.contains('opened')) {
    content.classList.remove('opened');
    button.children[0].classList.remove('view-all-button__decore--opened');
    button.children[1].textContent = 'Показать все';
    for (let i = 1; i < content.children.length; i++) {
      content.children[i].hidden = true;
    }
    if (breakPoint.matches) {
      content.children[1].hidden = false;
    }
  } else {
    content.classList.add('opened');
    button.children[0].classList.add('view-all-button__decore--opened');
    button.children[1].textContent = 'Скрыть';
    for (let paragraph of content.children) {
      paragraph.hidden = false;
    }
  }
});
