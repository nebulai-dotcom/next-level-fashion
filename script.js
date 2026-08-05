
// NEXT LEVEL Premium Website JavaScript


// Navbar effect while scrolling

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.12)";

    }

    else{

        header.style.boxShadow="none";

    }


});





// Smooth scrolling buttons


document.querySelectorAll("a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        const target =
        document.querySelector(
        link.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});







// Reveal animations


const elements =
document.querySelectorAll(
".collection-card, .features div, .review, .gallery img, .story-text"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{
threshold:0.15
});



elements.forEach(element=>{


element.classList.add("hidden");

observer.observe(element);


});








// Hero buttons


const shopButton =
document.querySelector(".shop-btn");



if(shopButton){


shopButton.addEventListener("click",()=>{


document
.querySelector("#collections")
.scrollIntoView({

behavior:"smooth"

});


});


}





const exploreButton =
document.querySelector(".hero-buttons button");



if(exploreButton){


exploreButton.addEventListener("click",()=>{


document
.querySelector("#collections")
.scrollIntoView({

behavior:"smooth"

});


});


}







// WhatsApp contact button


const contactButton =
document.querySelector(".contact button");



if(contactButton){


contactButton.addEventListener("click",()=>{


window.open(

"https://wa.me/919878262083",

"_blank"

);


});


}







// Product image zoom effect


const images =
document.querySelectorAll(
".collection-card img"
);



images.forEach(img=>{


img.addEventListener("mouseenter",()=>{


img.style.transform="scale(1.05)";

img.style.transition="0.5s";


});



img.addEventListener("mouseleave",()=>{


img.style.transform="scale(1)";


});


});






console.log(
"NEXT LEVEL premium fashion website loaded"
);
