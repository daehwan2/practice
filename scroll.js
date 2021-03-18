const scrollSize =document.querySelector('.scroll_container').scrollHeight-window.innerHeight;
console.log(scrollSize);
const pageYmax = document.querySelector('.scroll_container').scrollHeight-scrollSize+30;
console.log("Ymax:",pageYmax);

let first =true;
const pageAniFunc = function () {
    console.log(window.pageYOffset);
    if(window.pageYOffset>pageYmax*0.4 && first){
        //애니메이션 시작
        let content = document.querySelector('.section_aboutme .content span:nth-child(1) div');
        content.style.animation='typeingAny 1.5s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(2) div');
        content.style.animation='typeingAny 1.5s  1.5s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(3) div');
        content.style.animation='typeingAny 1.5s  3s forwards linear';
        content = document.querySelector('.section_aboutme .content span:nth-child(4) div');
        content.style.animation='typeingAny 1.5s  4.5s forwards linear';

        const container=document.querySelector(".section_aboutme");
        container.style.animation='opacityAni 1s forwards';
        const title = document.querySelector(".aboutme_title .title");
        title.style.animation='opacityAni 1s forwards';
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

        const container=document.querySelector(".section_skills");
        container.style.animation='opacityAni 1s forwards';
    }
    if(window.pageYOffset>pageYmax*1.5){
        const container=document.querySelector(".section_project");
        container.style.animation='opacityAni 1s forwards';
        const title = document.querySelector(".project_title");
        title.style.animation='opacityAni 1s forwards';
        
    }
}
window.addEventListener('scroll', pageAniFunc);
