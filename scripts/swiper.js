new Swiper('.card-wrapper',{
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true, // 🔥 ISSO É O QUE FALTAVA
    
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
             centeredSlides: false
        },
        768:{
            slidesPerView: 2,
             centeredSlides: false
        },
        1024:{
            slidesPerView: 3,
             centeredSlides: false
        }
    }
});
