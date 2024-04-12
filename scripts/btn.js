const DataMobile = {
   
   openMenu: document.querySelector('.menu-open'),
   closeMenu: document.querySelector('.menu-close'),

   show: document.querySelector('.show'),
   hide: document.querySelector('.hide'),

   navMobile: document.querySelector('.small-navigation-items'),
};

const showMenu = () => {
   DataMobile.navMobile.classList.remove(DataMobile.hide);
   DataMobile.navMobile.classList.add(DataMobile.show);
};


const hideMenu = () => {

};


DataMobile.openMenu.addEventListener('click', showMenu);
DataMobile.closeMenu.addEventListener('click', hideMenu);