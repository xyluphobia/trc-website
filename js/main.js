let burgerBtn = document.querySelector(".burger-menu-button");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = 
    window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = 
    window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, 
        // set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;
        disableScroll();
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
        enableScroll();
    }
}