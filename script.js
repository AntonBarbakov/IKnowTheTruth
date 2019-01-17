let textOpOne = false;
let textOpTwo = false;
let textOpThree = false;
let down = false;
function changeOpacityOne(){
   document.getElementById("img1").style.opacity = 1;
 }
function rechangeOpacityOne(){
  document.getElementById("img1").style.opacity = 0.2;
}
 function changeOpacityTwo(){
   document.getElementById("img2").style.opacity = 1;
 }
function rechangeOpacityTwo(){
  document.getElementById("img2").style.opacity = 0.2;
}
function changeOpacityThree(){
   document.getElementById("img3").style.opacity = 1;
 }
function rechangeOpacityThree(){
  document.getElementById("img3").style.opacity = 0.2;
}
function tabOpacityOne(){
  down = true;
  textOpOne = true;
  textOpTwo = false;
  textOpThree = false;
  if(textOpOne == true){
  document.getElementById("apollo").style.visibility = "visible";
  document.getElementById("btf").style.visibility="hidden";
  document.getElementById("alien").style.visibility="hidden";
     if(down==true){
     document.getElementById("up-button").style.opacity = 1;
     down=false;
    }
  document.getElementById("audio").play(); 
  }
}
function tabOpacityTwo(){
  down = true;
  textOpOne = false;
  textOpTwo = true;
  textOpThree = false;
  if(textOpTwo == true){
  document.getElementById("audio2").play(); 
  document.getElementById("btf").style.visibility = "visible";
  document.getElementById("apollo").style.visibility="hidden";
  document.getElementById("alien").style.visibility="hidden";
     if(down==true){
     document.getElementById("up-button").style.opacity = 1;
     down=false;
    }
  }
}
function tabOpacityThree(){
  down = true;
  textOpOne = false;
  textOpTwo = false;
  textOpThree = true;
  if(textOpThree == true){
  document.getElementById("audio3").play(); 
  document.getElementById("btf").style.visibility = "hidden";
  document.getElementById("apollo").style.visibility="hidden";
  document.getElementById("alien").style.visibility="visible";
     if(down==true){
     document.getElementById("up-button").style.opacity = 1;
     down=false;
    }
  }
}
function up(){
  if(down==false){
    document.getElementById("up-button").style.opacity = 0;
    document.getElementById("audio4").play(); 
  }
}
