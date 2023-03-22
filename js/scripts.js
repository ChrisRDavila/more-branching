// User interface logic
window.onload = function() {

  document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();
  hideResults();
  results();
  }
}

function hideResults () { 
  document.getElementById("dog").setAttribute("class", "hidden");
  document.getElementById("cat").setAttribute("class", "hidden");
  document.getElementById("bunny").setAttribute("class","hidden");
  document.getElementById("lizard").setAttribute("class","hidden");
  document.getElementById("fish").setAttribute("class","hidden");
  document.getElementById("rock").setAttribute("class","hidden");
  document.getElementById("errorMsg").setAttribute("class","hidden");
}

function results(){

  //document.querySelector("input[name=‘nameofrelatedradiobuttons’]:checked").value
  const fur = parseInt(document.querySelector("input[name=furQuestion]:checked").value);
  const space = parseInt(document.querySelector("input[name=spaceQuestion]:checked").value);
  const time = parseInt(document.querySelector("input[name=timeQuestion]:checked").value);
  console.log(fur+ " " + space+ " "+ time);
  if (fur && space && time) {
    document.querySelector("#dog").removeAttribute("class");    
  }
  else if(fur && space && !time){
    document.querySelector("#cat").removeAttribute("class");
  }
  else if(fur && !space && !time){
    document.querySelector("#bunny").removeAttribute("class");
  }
  else if(space && time){
    document.querySelector("#lizard").removeAttribute("class");
  }
  else if(time){
    document.querySelector("#fish").removeAttribute("class");
  }
  else{
    document.querySelector("#rock").removeAttribute("class");
  }
}
















//