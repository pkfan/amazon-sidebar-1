const mainItems = document.querySelectorAll('.menu .item')
const mainLayer = document.querySelector('.main-layer');
const subLayer = document.querySelector('.sub-layer');
const back = document.querySelector('.sub-layer .back');
const showButton = document.querySelector('.show-button');
const sidebar = document.querySelector('.sidebar');
const modal = document.querySelector('.modal');
 

mainItems.forEach(mainItem=>{
    mainItem.addEventListener('click',()=>{
        mainLayer.classList.add('main-layer-hide');
        subLayer.classList.add('sub-layer-show');
    }); 
})

back.addEventListener('click',()=>{
    mainLayer.classList.remove('main-layer-hide');
    subLayer.classList.remove('sub-layer-show');
});

showButton.addEventListener('click',()=>{
    sidebar.classList.add('show-sidebar');
    modal.classList.add('show-modal');
});
modal.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar');
    modal.classList.remove('show-modal');
});

