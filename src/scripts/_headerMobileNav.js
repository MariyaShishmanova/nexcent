const elements = {
  btnNav: document.querySelector('.btn-nav'),
  body: document.querySelector('body'),
  header: document.querySelector('.header')
};

const classNames = {
  mobileNavVisible: 'mobile-nav-visible',
  btnNavActive: 'active'
};

// handle btnNav click
function handleBtnNav() {
  elements.btnNav.classList.toggle(classNames.btnNavActive);
  elements.body.classList.toggle(classNames.mobileNavVisible);
}

document.addEventListener('DOMContentLoaded', () => {
  if (elements.btnNav) {
    elements.btnNav.addEventListener('click', handleBtnNav);
  }
});

// set css variables
function setCssVariable(variable, height) {
  document.documentElement.style.setProperty(variable, `${height}px`);
}

// set --viewport-height variable and update when resizing the viewport height
let viewportHeight = window.innerHeight;
setCssVariable('--viewport-height', viewportHeight);

window.addEventListener('resize', () => {
  viewportHeight = window.innerHeight;
  setCssVariable('--viewport-height', viewportHeight);

  // check if the mobile menu is open and the screen size is bigger then 960px
  if (window.innerWidth > 960 && elements.body.classList.contains(classNames.mobileNavVisible)) {
    elements.body.classList.remove(classNames.mobileNavVisible);
    elements.btnNav.classList.remove(classNames.btnNavActive);
  }
});

// set and update --header-height variable

let currentHeaderHeight = 0;
function getAndUpdateHeaderHeight() {
  if (elements.header) {
    let headerHeight = elements.header.offsetHeight;

    if (headerHeight !== currentHeaderHeight) {
      currentHeaderHeight = headerHeight;
      setCssVariable('--header-height', currentHeaderHeight);
    }
  }
}

document.addEventListener('DOMContentLoaded', getAndUpdateHeaderHeight);
window.addEventListener('resize', getAndUpdateHeaderHeight);
