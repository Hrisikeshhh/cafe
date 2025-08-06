
fetch("aboutEmployee.json")
.then((response)=>{
 return response.json();
})
.then((data)=>{
  console.log(data);
  const id = localStorage.getItem("infoId");
  const info = data.find(z => z.id == id);

  if(info)
  {
    document.querySelector("#pics").src = info.img;
    document.querySelector(".heading").textContent = info.heading;
    document.querySelector(".stone").textContent = info.one;
    document.querySelector(".stTwo").textContent = info.two;
    document.querySelector(".stThree").textContent = info.three;
    document.querySelector(".headingTwo").textContent = info.four;
    document.querySelector(".stFour").textContent = info.five;
    document.querySelector(".stFive").textContent = info.six;
    document.querySelector(".stsix").textContent = info.seven;
  }

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

    });