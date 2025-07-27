


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

     let tl = gsap.timeline();

     tl.from(".u1",{
      opacity:0,
      x:-100,
      duration:2,
      stagger:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".u1",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

       tl.from(".u2",{
      opacity:0,
      x:100,
      duration:2,
      stagger:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".u2",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

      tl.from(".u3",{
      opacity:0,
      x:-100,
      duration:2,
      stagger:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".u3",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

      tl.from(".u4",{
      opacity:0,
      x:100,
      duration:2,
      stagger:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".u4",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

     tl.from(".one",{
      opacity:0,
      scale:0,
      duration:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".one",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })


      tl.from(".two",{
      opacity:0,
      scale:0,
      duration:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".two",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

      tl.from(".three",{
      opacity:0,
      scale:0,
      duration:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".three",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

       tl.from(".four",{
      opacity:0,
      scale:0,
      duration:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".four",
        scrub:2,
        start:"top 80%",
        end:"top 40%"
      }
     })

      tl.from(".boxu",{
        opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".boxu",
        start:"top 100%",
        end:"top 90%",
        scrub:2
       }
      })

      return ()=>{
        tl.kill();
      };

    });
    // mobile Screen end

    

    
     let desktop = gsap.matchMedia();
     desktop.add("(min-width:801px)",()=>{
let tlTwo = gsap.timeline();

    
      tlTwo.from(".infoOuter p",{
         x:100,
         duration:2,
         opacity:0,
         stagger:1,
         scrollTrigger:{
          scroller:"body",
          trigger:".infoOuter p",
          scrub:2,
          start:"top 80%",
          end:"top 40%"
         }
      })


      tlTwo.from(".box",{
         y:100,
         duration:2,
         opacity:0,
         stagger:2,
         scrollTrigger:{
          scroller:"body",
          trigger:".box",
          scrub:2,
          start:"top 80%",
          end:"top 40%"
         }
      })

      tlTwo.from(".one",{
         x:100,
         duration:2,
         opacity:0,
         stagger:2,
         scrollTrigger:{
          scroller:"body",
          trigger:".one",
          scrub:2,
          start:"top 70%",
          end:"top 40%"
         }
      })

       tlTwo.from(".two",{
         x:-100,
         duration:2,
         opacity:0,
         stagger:2,
         scrollTrigger:{
          scroller:"body",
          trigger:".two",
          scrub:2,
          start:"top 70%",
          end:"top 40%"
         }
      })

       tlTwo.from(".three",{
         x:100,
         duration:2,
         opacity:0,
         stagger:2,
         scrollTrigger:{
          scroller:"body",
          trigger:".three",
          scrub:2,
          start:"top 70%",
          end:"top 40%"
         }
      })

       tlTwo.from(".four",{
         x:-100,
         duration:2,
         opacity:0,
         stagger:2,
         scrollTrigger:{
          scroller:"body",
          trigger:".four",
          scrub:2,
          start:"top 70%",
          end:"top 40%"
         }
      })

       gsap.from(".boxu",{
       opacity:0,
       y:50,
       duration:0.26,
       stagger:0.2,
       ease:"power2.out",
       scrollTrigger:{
        scroller:"body",
        trigger:".boxu",
        start:"top 80%",
        end:"top 45%",
        scrub:2
       }
     })


        return ()=>{
        tlTwo.kill();
      };
     })   
      


    


     
     
     
  