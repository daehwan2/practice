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
    if(window.pageYOffset>pageYmax){
        console.log('now');
        let content =document.querySelector('.section_skills .skills_list li:nth-child(1) .graph_temp .graph');
        content.style.animation='graphAni1 3s forwards';
        content =document.querySelector('.section_skills .skills_list li:nth-child(2) .graph_temp .graph');
        content.style.animation='graphAni2 3s forwards';
        content =document.querySelector('.section_skills .skills_list li:nth-child(3) .graph_temp .graph');
        content.style.animation='graphAni3 3s forwards';
        content =document.querySelector('.section_skills .skills_list li:nth-child(4) .graph_temp .graph');
        content.style.animation='graphAni4 3s forwards';
        content =document.querySelector('.section_skills .skills_list li:nth-child(5) .graph_temp .graph');
        content.style.animation='graphAni5 3s forwards';
        content =document.querySelector('.section_skills .skills_list li:nth-child(6) .graph_temp .graph');
        content.style.animation='graphAni6 3s forwards';
    }
}
window.addEventListener('scroll', pageAniFunc);
