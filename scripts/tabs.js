
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
  
 