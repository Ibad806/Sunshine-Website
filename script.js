// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

var section3content = document.querySelector(".section3-contents")  
var fixedimg = document.querySelector(".section3-img")  

section3content.addEventListener("mouseenter",function(){
fixedimg.style.display= "block"
})

section3content.addEventListener("mouseleave",function(){
  fixedimg.style.display= "none"
  })