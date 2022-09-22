const MENU = document.querySelector('.mainheader__nav__sec2');
const LIST = document.querySelector('.mainheader__nav__sec3');

const BARONE = document.querySelector('.bar1');
const BARTOW = document.querySelector('.bar2');
const BARTHREE = document.querySelector('.bar3');

function humbur(){
    BARONE.classList.toggle('humbar-one');
    BARTOW.classList.toggle('humbar-tow');
    BARTHREE.classList.toggle('humbar-three');
};   

function expand(){
    LIST.classList.toggle('mainheader__nav__sec3-togle');
};

MENU.addEventListener("click", expand);
MENU.addEventListener("click", humbur);
/*----------------------------------------------------------------------------------------------*/

const ANGEL = document.querySelectorAll('.accordian__icon');

ANGEL.forEach((angel) => {
    angel.addEventListener('click', (e) => {

    var accordianContent = document.querySelector(`#${angel.dataset.accordianTarget}`)
    angel.classList.toggle('accordian__icon2');
    
    accordianContent.classList.toggle('accordian__content2');
});
});
/*---------------------------------------------------------------------------------*/
const TABS = document.querySelectorAll('.tab');
const CONTENTS = document.querySelectorAll('.service__content');

let slideIndex = 0;
showSlides()

function showSlides(){
    let i;
    for(i=0; i < CONTENTS.length; i++){
        CONTENTS[i].classList.remove('showservice');
    }
    slideIndex++;
    if (slideIndex>CONTENTS.length) {slideIndex=1}
    for(i=0; i < TABS.length; i++) {
        TABS[i].classList.remove('opaser');
    }

    CONTENTS[slideIndex-1].classList.add('showservice');
    TABS[slideIndex-1].classList.add('opaser'); 
    
    const SLIDER = setTimeout(showSlides, 3000);

    TABS.forEach((tab) =>{
         tab.addEventListener('click', (e) => {
             
             var targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);
        
              TABS.forEach((tab) => tab.classList.remove('opaser'));
              CONTENTS.forEach((content) => content.classList.remove('showservice'));

              tab.classList.add('opaser');
              targetTabContent.classList.add('showservice');
              e.preventDefault();
              clearTimeout(SLIDER);
         })
}

    )}

