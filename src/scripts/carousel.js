document.addEventListener('DOMContentLoaded', function() {
  const glide = new Glide('.section-clients__logos-container', {
    type: 'carousel',
    perView: 6,
    autoplay: 1500,
    breakpoints: {
      768: {
        perView: 4
      },
      520: {
        perView: 3
      }
    }
  });
  
  glide.mount();
});