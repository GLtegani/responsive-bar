// DATA
const DataMobile = {
   // MOBILE MENU
   openMenu: document.querySelector('.menu-open'),
   closeMenu: document.querySelector('.menu-close'),
   // IMGS MOBILE MENU
   openImg: document.querySelector('img.open-img'),
   closeImg: document.querySelector('img.close-img'),
   // CONTENT MOBILE NAV
   itemsMobile: document.querySelector('.small-navigation-items'),
};

// FUNCTIONS
const showMenu = () => {;

   DataMobile.itemsMobile.classList.remove('hide');
   DataMobile.itemsMobile.classList.add('show');
   DataMobile.openImg.classList.add('hide');
   DataMobile.closeMenu.classList.remove('hide');

};

const hideMenu = () => {
   
   DataMobile.itemsMobile.classList.add('hide');
   DataMobile.itemsMobile.classList.remove('show');
   DataMobile.openImg.classList.remove('hide');
   DataMobile.closeMenu.classList.add('hide');

};

// EVENTS
DataMobile.openMenu.addEventListener('click', showMenu);
DataMobile.closeMenu.addEventListener('click', hideMenu);

// EXPORTS
export {showMenu, hideMenu};