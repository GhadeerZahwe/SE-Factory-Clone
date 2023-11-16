
function openTab(evt, programName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content-container");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].style.color="#222";
    }
    var program=document.getElementById(programName);
    changeColor(program,evt);
    program.style.display = "flex";
    evt.currentTarget.className += " active";
  };
  
  function changeColor(program,evt){
    console.log(evt.currentTarget);
      var change_program=document.getElementsByClassName("program-container");
      if(program.classList.contains("yellow")){
        change_program.item(0).style.backgroundColor="rgb(255, 198, 53)";
        evt.currentTarget.style.color="rgb(255, 198, 53)";
      } else if(program.classList.contains("green")){
        change_program.item(0).style.backgroundColor="rgb(40, 238, 167)";
        evt.currentTarget.style.color="rgb(40, 238, 167)";
      } else if(program.classList.contains("purple")){
        change_program.item(0).style.backgroundColor="rgb(152, 100, 218)";
        evt.currentTarget.style.color="rgb(152, 100, 218)";
      } else if(program.classList.contains("pink")){
        change_program.item(0).style.backgroundColor="rgb(251, 80, 142)";
        evt.currentTarget.style.color="rgb(251, 80, 142)";
      }
  };