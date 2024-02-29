document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxText = document.querySelector('.parallax-text');
    parallaxText.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  

  document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxText = document.querySelector('.parallax-image-right-image');
    parallaxText.style.transform = 'translateX(' + scrollPosition * 0.5 + 'px)';
  });