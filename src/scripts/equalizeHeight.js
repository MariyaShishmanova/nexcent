const blogElements = {
  boxBody: document.querySelectorAll('.section-blog__box-body'),
  boxTitle: document.querySelectorAll('.section-blog__box-title')
};

function setEqualHeights(elements) {
  let maxHeight = 0;

  if (elements) {
    elements.forEach(element => {
      element.style.height = '';

      const elementHeight = element.offsetHeight;
      if (elementHeight > maxHeight) {
        maxHeight = elementHeight;
      }
    });

    // equalize heights only if window width is more then 660px
    if (window.innerWidth > 660) {
      elements.forEach(element => {
        element.style.height = maxHeight + 'px';
      });
    }
  }
}

setEqualHeights(blogElements.boxBody);
setEqualHeights(blogElements.boxTitle);

window.addEventListener('resize', () => {
  setEqualHeights(blogElements.boxBody);
  setEqualHeights(blogElements.boxTitle);
});
