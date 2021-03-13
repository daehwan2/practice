const dropdownButton = document.querySelector('.navcontainer .dropdownBtn');
const dropdown_list = document.querySelector('.dropdown_list');
const title = document.querySelector('.navcontainer .title');
const menu_list = document.querySelector('.navcontainer .menu_list');
const closeBtn = document.querySelector('.navcontainer .closeBtn');
const navContainer = document.querySelector('.navcontainer');
const nav = document.querySelector('nav');
function dropdownFunc(){
    dropdown_list.style.display = 'block';
    title.style.display='none';
    dropdownButton.style.display='none';
    menu_list.style.display='none';

    dropdown_list.style.height='100vh';
    closeBtn.style.display='block';
    navContainer.style.justifyContent='flex-end';
    dropdown_list.style.display='flex';
    dropdown_list.style.flexDirection='column';
    dropdown_list.style.justifyContent='space-around';
    nav.style.width='35vw';
    nav.style.right='0';
}
function closeFunc(){
    title.style.display='block';
    dropdownButton.style.display='block';
    closeBtn.style.display='none';
    dropdown_list.style.display='none';
    nav.style.width='100%';
}
dropdownButton.addEventListener('click',dropdownFunc);
closeBtn.addEventListener('click',closeFunc);