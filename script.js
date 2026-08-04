// NEXT LEVEL Website JavaScript


// Mobile Menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


if(menu){

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

}



// Smooth scrolling for navigation

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});





// Hero button

const heroButton = document.querySelector(".hero button");


if(heroButton){

heroButton.addEventListener("click",()=>{

    document
    .querySelector("#collection")
    .scrollIntoView({
        behavior:"smooth"
    });

});

}





// Reveal animation while scrolling


const revealElements = document.querySelectorAll(
    ".product, .features div, .review, .images img"
);


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},

{
threshold:0.15
}


);



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.8s";


observer.observe(element);


});





// WhatsApp button


const contactButton =
document.querySelector("#contact button");


if(contactButton){


contactButton.addEventListener("click",()=>{


window.open(
"https://wa.me/91XXXXXXXXXX",
"_blank"
);


});


}






// Current year automatically


const footerText =
document.querySelector("footer p");


if(footerText){


const year = new Date().getFullYear();


footerText.innerHTML =
`© ${year} NEXT LEVEL. All Rights Reserved.`;


}






console.log(
"NEXT LEVEL premium website loaded successfully"
);