const home = document.querySelector('.menu_home_js');
const aboutme=document.querySelector('.menu_aboutme_js');
const skills=document.querySelector('.menu_skills_js');
const project=document.querySelector('.menu_project_js');
const contact=document.querySelector('.menu_contact_js');

const home2 = document.querySelector('.menu_home_js2');
const aboutme2=document.querySelector('.menu_aboutme_js2');
const skills2=document.querySelector('.menu_skills_js2');
const project2=document.querySelector('.menu_project_js2');
const contact2=document.querySelector('.menu_contact_js2');
function homeFunc(){
    //스크롤
    window.scrollTo(0,0);
}
function aboutFunc(){
    window.scrollTo(0,pageYmax);
}
home.addEventListener('click',homeFunc);
aboutme.addEventListener('click',aboutFunc);

home2.addEventListener('click',homeFunc);
aboutme2.addEventListener('click',aboutFunc);