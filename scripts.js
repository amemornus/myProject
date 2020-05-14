//Get modal element
let modal = document.getElementById("simpleModal");
//GEt open modal button
let modalBtn = document.getElementById("modalBtn");
//Get close modal button
let closeBtn = document.querySelector('.closeBtn');

//Listen for click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
// window.onscroll = function() {myfunction()};

// //Get the offset position of the navbar//

// let navbar=document.getElementsByClassName('nabar');

// //Get the offset position of the navbar
// let sticky = navbar.offsetTop;


// function myfunction(){
//     if (window.pageYOffset >= sticky){
//         navbar.classList.add('sticky')
//     }else{
//         navbar.classList.remove('sticky');
//     }
// }

