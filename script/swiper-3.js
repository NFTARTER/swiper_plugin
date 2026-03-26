const ssfHero = document.querySelector ('.ssf_hero');
const shopBrand = document.querySelector ('.shop_list')
console.log(ssfHero);

const ssfSwiper = new Swiper(ssfHero,{
    slidesPerView : 3, //한번에 보이는 슬라이드 개수
    spaceBetween:0,
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
});
const shopSwiper = new Swiper(shop_list,{
    slidesPerView:3,
    spaceBetween:10,
    navigation:(
        nextEl:''
    )
});