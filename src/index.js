
import './styles/app.scss';

const anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
  item.addEventListener('click', e => {
    const hashval = item.getAttribute('href');
    const target = document.querySelector(hashval);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    e.preventDefault();
  });
}
