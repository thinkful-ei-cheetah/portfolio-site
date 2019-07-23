'use strict';

const TypeWriter = (function() {
  let typer = document.getElementById('typewriter');
  let HTML = `
    <span class="vh">const</span> buildDev = {
      name: <span class="sh">'Michael Verdi'</span>,
      type: <span class="sh">'Full Stack Developer'</span>,
      location: <span class="sh">'Tampa'</span>,
      skills:[<span class="sh">'React'</span>,
              <span class="sh">'Node'</span>,
              <span class="sh">'Rails'</span>,
              <span class="sh">'Postgres'</span>],
    };
  `;

  let cursorPosition = 0,
    tag = '',
    writingTag = false,
    tagOpen = false,
    typeSpeed = 50,
    tempTypeSpeed = 0;
  
  const type = function() {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === '<') {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = '';
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }

    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }

    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === ' ') {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      }
      typer.innerHTML += HTML[cursorPosition];
    }

    if (writingTag === true && HTML[cursorPosition] === '>') {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      writingTag = false;
      if (tagOpen) {
        let newSpan = document.createElement('span');
        typer.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };

  return {type};
}());