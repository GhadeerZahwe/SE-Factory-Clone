// Configure Typed.js
var typed = new Typed("#typed", {
  strings: [
    "Software engineer?",
    "Software engineer?",
    "Data engineer?",
    "UI/UX designer?",
  ],
  typeSpeed: 50,
  backSpeed: 45,
  bindInputFocusEvents: true,
  loop: true,
  cursorChar: "_",
  backDelay: 1200,
  startDelay: 0,
  // Callback before each string is typed
  preStringTyped: (arrayPos, self) => {
    // Define background colors for each position
    let backgroundColors = [
      "rgba(40, 238, 167, 0.93)",
      "rgba(40, 238, 167, 0.93)",
      "rgba(152, 100, 218, 0.93)",
      "rgba(251, 80, 142, 0.93)",
    ];
    // Define text colors for each position
    let textColors = ["#363738", "#363738", "#ffffff", "#ffffff"];

    // Update background color based on the current position
    document.getElementById("typed_container").style.backgroundColor =
      backgroundColors[arrayPos];

    // Update text color based on the current position
    document.getElementById("typed").style.color = textColors[arrayPos];
  },
});
