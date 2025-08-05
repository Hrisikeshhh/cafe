

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