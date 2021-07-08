import {useEffect} from "react";

export const SharedJs = () => {
    useEffect(() => {
      
        $(document).ready(function(){
          if (typeof window !== "undefined") {
            window.onscroll = function() {scrollFunction()}
          }
        
          function scrollFunction() {
            const navbarId = document.getElementById("navbar");
            if(!navbarId){
              return null;
            }
            else {
              if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
                navbarId.style.height = "90px";
                navbarId.style.backgroundColor = "black";
              } else {
                navbarId.style.height = "110px";
                navbarId.style.backgroundColor = "transparent";
              }
            }
          }
          // Navbar Javascript
          function openNav() {
            document.getElementById("fullscreenNav").style.width = "100%";
          }
          
          function closeNav() {
            document.getElementById("fullscreenNav").style.width = "0%";
          }

          document.getElementById("openNav").addEventListener("click", openNav);
          document.getElementById("closeNav").addEventListener("click", closeNav);

            // Logo Javascript
            $('.customer-logos').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                arrows: true,
                dots: false,
                pauseOnHover: false,
                prevArrow: '<i className="fas fa-arrow-circle-left"></i>',
                nextArrow: '<i className="fas fa-arrow-circle-right"></i>',
                responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            });
        });

        // Steps Section
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
              rect.top <= (window.innerHeight || document.documentElement.clientHeight)  &&
              rect.left >= -100 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
          
          var items = document.querySelectorAll("[data-name='cloud']");
          var circles = document.querySelectorAll("[data-name='circlePrg']");
          
          // code for the isElementInViewport function
           
          function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
              }
              else{
                items[i].classList.remove("in-view");
              }
            }

            for (var i = 0; i < circles.length; i++) {
                if (isElementInViewport(circles[i])) {
                  circles[i].classList.add("in-view");
                }
                else{
                  circles[i].classList.remove("in-view");
                }
              }
          }
           
          window.addEventListener("load", callbackFunc);
          window.addEventListener("scroll", callbackFunc);  

          // Course Section Javascript
          (function() { 
            var ourCourseSlider = function() {
              
              var backImg = [];
              backImg[0] = "/assets/images/chats/kevin.gif";
              backImg[1] = "http://cdn.digital-photo-secrets.com/images/black-white-dendelion-large.jpg";
              backImg[2] = "http://picturescollections.com/wp-content/uploads/2012/04/Black_And_White_Pictures.jpg";
              
              var i = 0;
              var x = (backImg.length) - 1;
              var int = 5000;
              
              let interval = setInterval(showNext, int);
              
              var elements = {
                ourCourseSlider: document.querySelector('.ourCourseSlider'),
                btn: { 
                  left: document.querySelector('.btnLeft'),
                  right: document.querySelector('.btnRight')
                }
              }
              
              var startInterval = () => {
                 interval = setInterval(showNext, int);
              }
              
              var stopInterval = () => {
                clearInterval(interval);
              }
              
              var attachEvents = () => {
                elements.btn.left.onclick = function() { showPrevious(); };
                elements.btn.right.onclick = function() {  showNext(); };
                elements.ourCourseSlider.addEventListener("mouseenter", stopInterval);
                elements.ourCourseSlider.addEventListener("mouseleave", startInterval);
              };
              
              var changeImg = function() {
                elements.ourCourseSlider.style.backgroundImage = 'url(' + backImg[i] + ')';
              }
              
              var initialize = (function() {
                attachEvents();
                changeImg(i);
              })();
        
              var showPrevious = function() {
                (i <= 0) ? i = 2 : i--;
                changeImg(i);
              };
        
              var showNext = function() {
                (i >= x) ? i = 0 : i++;
                changeImg(i);
              };
        
            };
            
            document.querySelector('.ourCourseSlider') ? ourCourseSlider() : undefined;
        })();

    }), []
}

