const fullText = document.querySelector('.about__text-full');
const aboutButton = document.querySelector('.about__button');

const showMore = () => {
  if (fullText) {
    aboutButton.addEventListener('click', () => {
      if (fullText.classList.contains('about__text-is-hidden')) {
        fullText.classList.remove('about__text-is-hidden');
        aboutButton.textContent = 'Свернуть';
      } else {
        fullText.classList.add('about__text-is-hidden');
        aboutButton.textContent = 'Подробнее';
      }
    });
  } else {
    aboutButton.style.display = 'none';
  }
};

export {showMore};
