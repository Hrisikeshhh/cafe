

// let api = (()=>{
fetch("data.json")
.then((response)=>{
  return response.json();
})
.then((data)=>{
    const id = localStorage.getItem("productId");
    const product = data.find(p => p.id === id);

    if(product){
        document.querySelector("#img").src = product.img;
        document.querySelector("#reviews").textContent = product.reviews;
        document.querySelector("#info").textContent = product.info;
        document.querySelector("#Discription").textContent = product.description;
        document.querySelector("#price").textContent = product.price;
        document.querySelector("#category").textContent = product.category;
        document.querySelector("#type").textContent = product.type;
    }
})






let productPage = document.querySelectorAll(".p");
     
     productPage.forEach((e)=> {
      
     e.addEventListener("click",()=>{
      localStorage.setItem("productId",
      e.dataset.id);
      window.location.href="productDetail.html";
     })
     });


     

    //  / for mobile screen
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









