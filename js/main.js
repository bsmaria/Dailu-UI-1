const slideOutMenu = document.getElementById('slide-out-menu');
const menubtn = document.getElementById('bars-icon');
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const passwordInput = document.getElementById('password-input');
const toogleText = document.getElementById('passtext');


//SHOW AND HIDE mobile btn - CODE 

menubtn.addEventListener('click', function() {
    if (slideOutMenu.style.display === "none") {
        slideOutMenu.style.display = "block";
    } else {
        slideOutMenu.style.display = "none";
    }
});

// Show search - CODE 

searchBtn.addEventListener('click', function() {
    if (searchBox.style.opacity == 0) {
        searchBox.style.opacity = 1;
    } else {
        searchBox.style.opacity = 0;
    }
});


// SHOW PASSWORD - CODE
toogleText.addEventListener('click', function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password";
    }
});