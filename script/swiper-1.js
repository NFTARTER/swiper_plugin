// swiper-1.js
const wrap = document.querySelector('#wrap');
const graphic = document.querySelector('.graphic');
const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:'vertical',
});
console.log(wrap);
//--------------------------웹 포폴
const web = document.querySelector('.web');
const webSwiper = new Swiper(web,{
    //옵션:값, 옵션:{옵션:값,},
    // autoplay:{delay:2000,},
    loop:true,
    pagination:{
        /* 페이지대상HTML연결, 모양, 동적옵션 */
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', //bullets(기본값), fraction
        // dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});
const graphicSwiper = new Swiper(graphic,{
    //옵션:값, 옵션:{옵션:값,},
    // autoplay:{delay:2000,},
    loop:true,
    pagination:{
        /* 페이지대상HTML연결, 모양, 동적옵션 */
        el:'.project2 .group .page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'bullets', //bullets(기본값), fraction
        // dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});
