document.addEventListener("DOMContentLoaded",()=>{
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

})
})