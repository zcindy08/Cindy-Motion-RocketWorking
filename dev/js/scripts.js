//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools,CustomWiggle,CustomEase,MotionPathPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});
  
  //let shipTL = gsap.timeline();

  function init(){
    //***********  fadeInTL init ****************
    gsap.set("#Rocketship", {alpha:0, y:"+=800"});

    //*********** zoomTL init ****************
    gsap.set(["#stars g"], {transformOrigin:"center center", Position:"absolute"});
    gsap.set(["#fg1","#fg3","#fg5"], {transformOrigin:"center center", Position:"absolute"});
    gsap.set(["#fg2","#fg7"], {transformOrigin:"center center", Position:"absolute"});

    //*********** spaceshipTL init ****************
    gsap.set("#Parachute", {alpha:0, x:"435", y:"+=60",rotation:-10});
    //*********** smokeTL init ****************
    gsap.set(".smoke", {alpha:0, transformOrigin:"center center"});
  
    
    //*********** flightTL init ****************
    //gsap.set("#Rocketship",{xPercent:-50, yPercent:-50, transformOrigin:"center top"});
    //*********** moonLandingTL init ****************

  }
  
  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline()
    tl.from("#sky",{alpha:0, duration:2},"+=3")
      .from("#moon",{duration:4, y:"-=2000", ease:"elastic.inOut(1,1.5)"},"-=3")
      .from(".clouds", {alpha:0, stagger:0.5, duration:1.5, scale:2, ease: "bounce.inOut", y: -700})

    ;
    return tl;
  }
  function twinkleTL(){
    let tl = gsap.timeline()
    tl.from("#stars g", {alpha:0, duration: 2}, "-=1")
      .from(".sparkle", {duration:1, scale:2, ease: "back.out(1.7)", repeat:3, yoyo:"true"})
    ;
    return tl;
  }
  
  //*********** zoomTL ****************
  function zoomTL(){
    let tl = gsap.timeline()
    tl.to("#Rocketship", {alpha:0});
    tl.from("#BgColor",{alpha:0, duration:4, scale:20},"zoom")
      .from("#fg1",{duration:3.5, scale:10, x:"-=5000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg2",{duration:4, scale:10, x:"+=7000", ease:"power4.out"},"zoom")
      .from("#fg3",{duration:3, scale:5, x:"-=6000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg5",{duration:3.5, scale:8, x:"-=7000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg7",{duration:4, scale:8, x:"+=5000", ease:"elastic.out(0.75,1)"},"zoom")
    ;
    return tl;
  }

  //*********** smokeTL ****************

    function rotateTL(){
      let tl = gsap.timeline()
      tl
        .to(".clouds",{duration:1, x:"-=50", y:"+=900", ease: "power4.out"},"fallAway-=1")
        .to("#Rocketship",{duration:3, alpha:1, ease:"elastic.out(1.2,0.4)",y:600},"path")
        .to("#Fg",{duration:1,x:"-=100", y:"+=900", ease: "power3.in"},"fallAway-=1")
        .to("#sky",{duration:2, rotate:"100deg",x:"+=300", y:"+=5000", scale:"0.2", ease: "power3.in"},"fallAway")
        .to("#moon",{duration:4,scale:2, y:"+=800",ease:"elastic.inOut(1.2,0.4)"},"fallAway-=1")
        .to("#Rocketship",{duration:2, scale:2, x:"+=3", y:"-=8", ease:"power2.out"},"path-=3")
        .to("#stars g",{duration:2, scale:2, x:"+=5", y:"-=8", ease:"power2.out"},"path+=4")
        .to("#stars g",{duration:4,translateY:+200,rotation:360,scale:1},"path+=1.2")
        .to("#Rocketship",{duration:0.25, alpha:1, rotation:-3, repeat:7, yoyo:"true", ease:"bounce.inOut"},"path-=1")
       
    ;
    return tl;
  }


  //*********** liftOffTL ****************
  function smokeTL(){ 
    let tl = gsap.timeline()
    tl
    .to(".smoke", {duration:1, alpha:0, stagger: 0.25, y:"+=10", ease: "circ.out"},"path-=2")
    .to(".smoke",{duration:3, alpha:1, x:"+=30", y:"+=850", ease:"power3.out"},"path-=1")
    ;
    return tl;
  }
  
  

  
  function liftOffTL(){
    let tl = gsap.timeline();
  tl.to("#stars g",{duration:1,translateY:+500,rotation:360,scale:2},"-=3")
  .to("#Rocketship",{
      duration:7,
      motionPath:{
        path:"#flightPath",
        align:"#flightPath",
        autoRotate:"90",
        ease:"power.4out"
      }
      },"path-=2")
    .to("#Rocketship",{duration:1.5, alpha:1, scale:1})
    .to("#Parachute",{alpha:1, scale:1})
    .to("#Rocketship",{
      duration:5,scale:1,
      motionPath:{
        path:"#flightPath2",
        align:"self",
        rotate:"2deg",
        ease:"power.4out",
        alpha:0
      }
      },"path2")
      .to("#Parachute",{alpha:1, y:"+=50"})
      .to("#Parachute",{ 
        duration:5, scale:1,
        motionPath:{
          path:"#flightPath2",
          align:"self",
          ease:"none"
        }
        },"path2")
        .to("#Parachute",{alpha:0, duration:0.25})
        .to("#Rocketship",{alpha:0, duration:0.25},"-=1")  
        .to("#stars g",{duration:3,translateY:-10,scale:1},"path2")
        .to("#stars g",{duration:2,translateY:+100,scale:1},"-=1")
        
        ;
        return tl;
  
  }
  
  //*********** LandingTL ****************
  function LandingTL(){
    let tl = gsap.timeline()
    tl
      .to("#clouds",{duration:3, alpha: 1, x:"+=50", y:"-=900", ease: "power2.in"},"<")
      .to(".sparkle", {duration:2, scale:3, ease: "back.out(1.7)", repeat:3, yoyo:"true"},"-=2")
      .to("#clouds",{duration:3, alpha:0})
      .to("#stars g",{duration:1.5, alpha:0},"-=1")
      
      
  ;
    return tl;
  }
 
      
  
  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
      gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  
  mainTL
        .add(zoomTL())
        .add(fadeInTL(),"<")
        .add(twinkleTL())
        .add(rotateTL())
        .add(smokeTL(),">")
        .add(liftOffTL(),"-=1")
        .add(LandingTL())
        


          
      
     


;//timeline END



});
