//  Handle the height of section-blog boxes and their elements
const blogElements = {
  boxBody: document.querySelectorAll('.section-blog__box-body'),
  boxTitle: document.querySelectorAll('.section-blog__box-title')
};

function setEqualHeights(elements) {
  let maxHeight = 0;

  elements.forEach(element => {
    element.style.height = '';

    const elementHeight = element.offsetHeight;
    if (elementHeight > maxHeight) {
      maxHeight = elementHeight;
    }
  });

  elements.forEach(element => {
    element.style.height = maxHeight + 'px';
  });
}

// Check window width and apply the function if greater than or equal to 661px
function applyEqualHeights() {
  const minWidth = 661;

  if (window.innerWidth >= minWidth) {
    setEqualHeights(blogElements.boxBody);
    setEqualHeights(blogElements.boxTitle);
  }
}

applyEqualHeights();
window.addEventListener('resize', applyEqualHeights);
