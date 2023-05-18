
  export const menuBtn = document.querySelector('.main-header__button');
  export const siteNav = ducument.querySelector('.site-nav');

  export const showHideMenu = (evt) => {
    // if(siteNav.hasAttribute('style') && siteNav.style.display !== "") {

    //   if(siteNav.style.display === 'none') {
    //     siteNav.style.display = 'block';
    //   } else {
    //     siteNav.style.display = 'none';
    //   }
      
    //   siteNav.style = 'display: block;';
    // } else {
    //   siteNav.style.display = 'none';
    // }
    console.log('xnj-sdlkfjsdkfjpoi');
  };
  
  export const setMainMenuEvt = () => {
    menuBtn.addEventListener('pointerdown', showHideMenu); 
  };



