function openTab(evt, programName) {
  // Hide all tab content
  var tabcontent = document.getElementsByClassName("tab-content-container");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all tab links and reset text color
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.color = "#363738"; // Reset text color to default
  }

  // Show the selected tab content
  var program = document.getElementById(programName);
  program.style.display = "flex";

  // Change color based on the class of the program
  changeColor(program);

  // Add the active class to the clicked tab link and set its background color
  evt.currentTarget.className += " active";
  evt.currentTarget.style.color = "#fff"; // Set text color to white for active tab link
}

function changeColor(program) {
  var change_program = document.getElementsByClassName("program-container")[0];
  // Define color mappings based on classes
  var colorMap = {
    yellow: "rgb(255, 198, 53)",
    green: "rgb(40, 238, 167)",
    purple: "rgb(152, 100, 218)",
    pink: "rgb(251, 80, 142)",
  };

  // Check if the program class exists in the colorMap
  if (program.classList[1] in colorMap) {
    var bgColor = colorMap[program.classList[1]];
    change_program.style.backgroundColor = bgColor;
  }
}
