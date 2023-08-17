

$('.accordion-header').on('click', function(){
  let wrapper = $(this).parents('.accordion-wrapper');
  wrapper.find('.accordion-body').slideToggle(500);
  wrapper.toggleClass('active');
});


const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});


const swiper = new Swiper('.swiperWorks', {
    slidesPerView: 2,
    spaceBetween: 34,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });

const clients = new Swiper('.swiper-clients', {
  
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-clients-right',
    prevEl: '.swiper-clients-left',
  },

});

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function(item){
  item.addEventListener('click', function(){
    
    contentBoxes.forEach(function(item){
      item.classList.add('tabs-hidden');
    });

      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('tabs-hidden');
   
  });
});

//document.getElementById('#test').textContent = '-';

var post = new Swiper(".swiper-post", {
  navigation: {
    nextEl: ".swiper-post-button-right",
    prevEl: ".swiper-post-button-left",
  },
});

//tab
const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

  const tabsTitleTarget = event.target.getAttribute('data-tab');
  tabsTitle.forEach(element => element.classList.remove('active-tab'));
  tabsContent.forEach(element => element.classList.add('hidden-tab-content'));
  item.classList.add('active-tab');

  document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

  
}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');


//popup
Fancybox.bind("[data-fancybox]", {
});
  

