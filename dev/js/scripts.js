//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools,CustomWiggle,CustomEase);

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
  GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});
  //let shipTL = gsap.timeline();

  function init(){
    //***********  fadeInTL init ****************

    //*********** zoomTL init ****************
    gsap.set(["#fg1","#fg3","#fg5"], {transformOrigin:"center", Position:"absolute"});
    gsap.set(["#fg2","#fg7"], {transformOrigin:"center", Position:"absolute"});

    //*********** spaceshipTL init ****************
    gsap.set("#Parachute", {display:"none"});
    //*********** liftOffTL init ****************
    gsap.set(["#fg4","#fg6"], {display:"none", transformOrigin:"center bottom"});
    gsap.set(".smoke", {autoAlpha: "0"});
    //*********** flightTL init ****************

    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline()
    tl.from("#sky",{alpha:0, duration:2},"+=3")
      .from("#moon",{duration:4, y:"-=2000", ease:"elastic.inOut(1,1.5)"},"-=3")
      .from(".clouds", {alpha:0, stagger:0.5, duration:1.5, scale:2, ease: "bounce.inOut", y: -700},"<")

    ;
    return tl;
  }

  function twinkleTL(){
    let tl = gsap.timeline()
    tl.from("#stars g", {alpha:0, duration: 2}, "-=1")
      .from(".sparkle", {duration:1, scale:2, ease: "back.out(1.7)", repeat:10, yoyo:"true"})
    ;
    return tl;
  }
  
  //*********** zoomTL ****************
  function zoomTL(){
    let tl = gsap.timeline()
    tl.from("#BgColor",{alpha:0, duration:4, scale:20},"zoom")
      .from("#fg1",{duration:3.5, scale:10, x:"-=5000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg2",{duration:4, scale:10, x:"+=7000", ease:"power4.out"},"zoom")
      .from("#fg3",{duration:3, scale:5, x:"-=6000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg5",{duration:3.5, scale:8, x:"-=7000", ease:"elastic.out(0.75,1)"},"zoom")
      .from("#fg7",{duration:4, scale:8, x:"+=5000", ease:"elastic.out(0.75,1)"},"zoom")
    ;
    
    return tl;

  }
  //*********** spaceshipTL ****************
  function spaceshipTL(){
    let tl = gsap.timeline()
    //CustomWiggle.create("rocketWiggle", {wiggles: 6, duration:3, type:"anticipate"});
    tl.from("#Rocketship", {alpha:0, duration:3, y:"+505", ease: "bounce.inOut"})
    



    ;
  
    return tl;

  }
  //*********** liftOffTL ****************
  function liftOffTL(){
    let tl = gsap.timeline()
    tl.from("#fg4", {duration:2, y:"+300", ease: "none"})
    tl.from("#fg6", {duration:1, y:"+200", ease: "none"})

    ;
  
    return tl;

  }
  //*********** flightTL ****************

  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  mainTL.add(zoomTL())
        .add(fadeInTL(),"<")
        .add(twinkleTL())
        .add(spaceshipTL(),"<+4")    
        .add(liftOffTL())
        
        
        
  
  ;//tl END




});
