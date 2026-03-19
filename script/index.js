const heroBanner = document.querySelector('.hero_bnr');
const heroBnr = document.querySelector('.market_bnr');
console.log(heroBanner);
console.log(heroBnr);
const heroSlide = new Swiper(heroBanner,{
    //옵션:값, 
    //옵션:{옵션:값, 옵션:값,},
    loop:true,/* 슬라이드 끝->시작 반복 true, false */
    //제자리 나타나기/사라지기 할때는 direction 적용해제
    effect:'fade', //fade, cube, flip
    //direction:'vertical',/* 슬라이드 방향 : horizontal수평(기본값) */
    /* mousewheel:true, 마우스휠 가능 옵션 */
    //자동재생 
    autoplay:{
        delay:1000, //1000 == 1초
        pauseOnMouseEnter:true,//마우스가 올라오면 일시정지
        disableOnInteraction:true,
        //마우스 상호작용 후에 멈출건지, 움직일건지(false) 옵션
    },
});
const slideBanner = new Swiper(heroBnr,{
    loop:true,
    direction:'horizontal',
    autoplay:{
        delay:2000,
    }
})
/* swiper css 직점 입력 시 주의사항 */
/* 1. swiper 적용 태그는 플러그인CDN연결파일에 의해서 기본값들이 먼저 내장되어
있기 때문에 반드시 F12 개발자도구로 체크하고 필요한 값만 구분해서 넣어야 한다. 
2. css 디자인 입력 시 적용이 안된다면 기본값과 충돌되는지 개발자 도구로 CSS
우선순위를 확인하고 올바른 대상에 적용한다. 
3. swiper, swiper-wrapper, swiper-slide 3요소에는 레이아웃 관련 CSS삽입 시
신중하게 사용한다. */
