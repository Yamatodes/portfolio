const headerElement = document.getElementById('header');

document.addEventListener('scroll', function() {
  if (document.getElementById('hero').getBoundingClientRect().bottom < 100) {
    headerElement.classList.add('active');
  }else {
    headerElement.classList.remove('active');
  }
})