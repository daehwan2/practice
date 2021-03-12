const scrollSize =document.querySelector('.scroll_container').scrollHeight-window.innerHeight;
console.log(scrollSize);
const pageYmax = document.querySelector('.scroll_container').scrollHeight-scrollSize-30;
console.log(pageYmax);

let first =true;
const pageAniFunc = function () {
    console.log(window.pageYOffset);
    if(window.pageYOffset>pageYmax*(1/4) && first){
        //애니메이션 시작
        let content = document.querySelector('.section_aboutme .content span:nth-child(1) div');
        content.style.animation='typeingAny 2s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(2) div');
        content.style.animation='typeingAny 2s  2s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(3) div');
        content.style.animation='typeingAny 2s  4s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(4) div');
        content.style.animation='typeingAny 2s  6s forwards linear';
        first=false;
    }
}
window.addEventListener('scroll', pageAniFunc);
