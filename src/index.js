import ReactDOM from 'react-dom';
import '../src/style.css';
import WebContent from './app.jsx';

ReactDOM.render(<WebContent />, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();

    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}