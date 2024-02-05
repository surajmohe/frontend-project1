gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl = gsap.timeline();
tl.to("#p1>h1",{
   y:"0",
   ease:Expo.easeInOut,
   duration:2,
})
tl.to("#p2>h1",{
   y:"0",
   ease:Expo.easeInOut,
   delay:-2,
   duration:2,
})
tl.to("#p3>h1",{
   y:"0",
   ease:Expo.easeInOut,
   duration:2,
   delay:-2
})
tl.to(" #scroll #line",{
   left:"100%",
     width:"0%",
   ease:Expo.easeInOut,
   duration:2,
   repeat:-1,
})
tl.to(" #scroll #line",{
   width:"100%",
   ease:Expo.easeInOut,
 duration:2,
 delay:-0.5,
 repeat:-1,
})
gsap.to("#section4 #fs",{
  scrollTrigger:{
      trigger:"#section4 #fs",
      scroller:"body",
      // markers:true,
      strat:"top 100%",
      
  },
  duration:2,
  backgroundColor:"black"
})

function video() {

  document.querySelector("#vid")
  .addEventListener("mouseover",function(){
      this.play();
      
  })
  document.querySelector("#vid")
  .addEventListener("mouseleave",function(){
      this.pause();
  })
  play();
  pause();
}


  var cursor = document.querySelector("#cursor");
  var main = document.querySelector("#main");

  main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y+ "px"
  })

  main.addEventListener("mousemove",function(dets){
    cursor.style.left = `${dets.x + 10}px`
    cursor.style.top = `${dets.y + 10}px`
  })

  // document.addEventListener("mousemove",function(dets){
  //   document.querySelector("#cursor").style.left = `${dets.x + 20}px`
  //   document.querySelector("#cursor").style.top = `${dets.y + 20}px`
  //   console.log(dets);
  // })
  document.querySelector("#sec3elem1").addEventListener("mousemove",function(dets){
    document.querySelector("#card1").style.scale = 1
    document.querySelector("#card1").style.opacity = 1
     
    cursor.style.opacity = 0
   
    document.querySelector("#card1").style.left = (dets.x - 50)+"px"
    document.querySelector("#card1").style.top = (dets.y - 400)+"px"
  
  
  })
  document.querySelector("#sec3elem1").addEventListener("mouseleave",function(dets){
    document.querySelector("#card1").style.scale = 0
    document.querySelector("#card1").style.opacity = 0
     
    cursor.style.opacity = 1
   
  })
  
  document.querySelector("#sec3elem2").addEventListener("mousemove",function(dets){
    document.querySelector("#card2").style.scale = 1
    document.querySelector("#card2").style.opacity = 1
     
    cursor.style.opacity = 0
   
    document.querySelector("#card2").style.left = (dets.x - 50)+"px"
    document.querySelector("#card2").style.top = (dets.y - 500)+"px"
  
  
  })
  
  document.querySelector("#sec3elem2").addEventListener("mouseleave",function(dets){
    document.querySelector("#card2").style.scale = 1
    document.querySelector("#card2").style.opacity = 1
     
    cursor.style.opacity = 1
  
  })  
  
  
  document.querySelector("#sec3elem3").addEventListener("mousemove",function(dets){
    document.querySelector("#card3").style.scale = 1
    document.querySelector("#card3").style.opacity = 1
     
    cursor.style.opacity = 0
   
    document.querySelector("#card3").style.left = (dets.x - 50)+"px"
    document.querySelector("#card3").style.top = (dets.y - 400)+"px"
  
  
  })  
  
  
  document.querySelector("#sec3elem3").addEventListener("mouseleave",function(dets){
    document.querySelector("#card3").style.scale = 1
    document.querySelector("#card3").style.opacity = 1
     
    cursor.style.opacity = 1
  
  })  
  document.querySelector("#sec3elem4").addEventListener("mousemove",function(dets){
    document.querySelector("#card4").style.scale = 1
    document.querySelector("#card4").style.opacity = 1
     
    cursor.style.opacity = 0
   
    document.querySelector("#card4").style.left = (dets.x - 50)+"px"
    document.querySelector("#card4").style.top = (dets.y - 400)+"px"
  
  
  })  
  
  document.querySelector("#sec3elem4").addEventListener("mouseleave",function(dets){
    document.querySelector("#card4").style.scale = 1
    document.querySelector("#card4").style.opacity = 1
     
    cursor.style.opacity = 1
  
  })  
  

// loco();
video();

