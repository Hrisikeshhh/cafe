 document.addEventListener("DOMContentLoaded",()=>{


 
   var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay:{
         delay: 3500,
         disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
// reviews

     var swiperTwo = new Swiper(".mySwiperTwo", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        autoplay:{
        delay: 2500,
        disableOnInteraction: false,
        },
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });


      let menuBtn = document.querySelector("#menu");

      menuBtn.addEventListener("click",()=>{
        setTimeout(()=>{
          swiper1.update();
        },300);
      })


      // for mobile screen
      let mm = gsap.matchMedia();

      mm.add("(max-width: 800px)",()=>{
        
       let menu = document.querySelector("#menu"); 
       let close = document.querySelector("#close");
      let tlOne = gsap.timeline()

      tlOne.to(".listItems",{
        x:355,
        duration:0.7
      })

      tlOne.from(".items",{
        x:40,
        duration:0.4,
        stagger:0.4,
        opacity:0
      })

      tlOne.from("#close",{
        scale:0,
        duration:0.5,
        opacity:0
      })

      tlOne.pause();
           
     menu.addEventListener("click",()=>{
      tlOne.play();
     })

     close.addEventListener("click",()=>{
      tlOne.reverse();
     })

      gsap.from(".box4",{
        opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".box4",
        start:"top 100%",
        end:"top 80%",
        scrub:2
       }
      })

      })


 
      // computer screen
    
    let tlTwo = gsap.timeline();
     tlTwo.from(".box",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".box",
        start:"top 80%",
        end:"top 30%",
        scrub:2
       }
     })

    tlTwo.from(".leftAbout",{
      opacity:0,
      duration:0.4,
      scrollTrigger:{
        scroller:"body",
        trigger:".leftAbout",
        scrub:2,
        start:"top 90%",
         end:"top 40%"
      }
    })

    tlTwo.from(".aboutInfo",{
      opacity:0,
      duration:0.4,
      scrollTrigger:{
        scroller:"body",
        trigger:".aboutInfo",
        scrub:2,
        start:"top 90%",
         end:"top 40%"
      }
    })

   tlTwo.from(".aboutInfo h3",{
      opacity:0,
      x:30,
      duration:0.4,
      stagger:0.1,
      scrollTrigger:{
        scroller:"body",
        trigger:".aboutInfo h3",
        scrub:2,
        start:"top 90%",
         end:"top 40%"
      }
    })
 
    tlTwo.from("#aboutUs",{
    opacity:0,
      x:40,
      duration:0.4,
      stagger:0.1,
      scrollTrigger:{
        scroller:"body",
        trigger:".aboutInfo h3",
        scrub:2,
        start:"top 90%",
        end:"top 40%"
      }
    })

     tlTwo.from(".offerBox",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".offerBox",
        start:"top 80%",
        end:"top 30%",
        scrub:2
       }
     })

       tlTwo.from(".comboBox",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".comboBox",
        start:"top 80%",
        end:"top 30%",
        scrub:2
       }
     })

      tlTwo.from(".banner",{
        scale:0,
        ease:"power2.out",
        scrollTrigger:{
          scroller:"body",
          trigger:".banner",
          start:"top 80%",
          end:"top 30%",
          scrub:2
        }
      })


      tlTwo.from(".items4",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".items4",
        start:"top 70%",
        end:"top 30%",
        scrub:2
       }
     })
    
      tlTwo.from(".x1",{
       opacity:0,
       x:-50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".x1",
        start:"top 80%",
        end:"top 30%",
        scrub:2
       }
     })

      tlTwo.from(".x2",{
       opacity:0,
       x:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".x2",
        start:"top 80%",
        end:"top 30%",
        scrub:2
       }
     })

     tlTwo.from(".y",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".y",
        start:"top 70%",
        end:"top 30%",
        scrub:2
       }
     })


     let mm2 = gsap.matchMedia();

     mm2.add("(min-width:801px)",()=>{
        gsap.from(".box4",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".box4",
        start:"top 80%",
        end:"top 45%",
        scrub:2
       }
     })
     })
   



    })
    