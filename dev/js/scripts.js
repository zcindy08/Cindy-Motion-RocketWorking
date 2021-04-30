//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

//register Plugins
gsap.registerPlugin(GSDevTools);

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


  function init(){
    //***********  fadeInTL init ****************

    //*********** zoomTL init ****************

    //*********** spaceshipTL init ****************

    //*********** liftOffTL init ****************

    //*********** flightTL init ****************

    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){

  }

  //*********** zoomTL ****************

  //*********** spaceshipTL ****************

  //*********** liftOffTL ****************

  //*********** flightTL ****************

  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
//  mainTL.add(fadeInTL())


  //;//tl END





});
