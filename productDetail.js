

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









