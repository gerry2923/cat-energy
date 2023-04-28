const menuBtn = document.querySelector('.main-header__button');
const siteNav = ducument.querySelector('.site-nav');

const showHideMenu = (evt) => {
  if(siteNav.hasAttribute('style') && siteNav.style.display !== "") {

    if(siteNav.style.display === 'none') {
      siteNav.style.display = 'block';
    } else {
      siteNav.style.display = 'none';
    }
    
    siveNav.style = 'display: block;';
  } else {
    siteNav.style.display = 'none';
  }

};



menuBtn.addEventListener('pointerdown', showHideMenu);