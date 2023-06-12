$(document).ready(function(){

    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        animateOut: 'fadeOut', 
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                
            },
            600:{
                
            },
            1000:{
               
            }
        }
    })
});


//SUBMIT BUTTON LEADING TO 'THANK YOU' PAGE
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = this.action; 
});
