var typed = new Typed('#typed', {
    strings: ['Software engineer?', 'Software engineer?', 'Data engineer?', 'UI/UX designer?'],
    typeSpeed: 50,
    backSpeed: 45,
    bindInputFocusEvents: true,
    loop: true,
    cursorChar: '_',
    backDelay: 1200,
    startDelay: 0,
    preStringTyped: (arrayPos, self) => {
       let colors = [
          'rgba(40, 238, 167, 0.93)',
          'rgba(40, 238, 167, 0.93)',
          'rgba(152, 100, 218, 0.93)',
          'rgba(251, 80, 142, 0.93)',
       ];
       let textColors = ['#363738', '#363738', '#ffffff', '#ffffff'];
       document.getElementById('typed_container').style.backgroundColor = colors[arrayPos];
       document.getElementById('typed').style.color = textColors[arrayPos];
    }
  });

  