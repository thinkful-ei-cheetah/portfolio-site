'use strict';

// const TypeWriter = (function() {
//   let typer = document.getElementById('typewriter');

//   class TypeWriter {
//     constructor() {
//       this.HTML = typer.innerHTML;
//       this.cursorPosition = 0;
//       this.tag = '';
//       this.writingTag = false;
//       this.tagOpen = false;
//       this.typeSpeed = 100;
//       this.tempTypeSpeed = 0;
//     }

//     type() {
//       typer.innerHTML = '';

//       if (this.writingTag === true) {
//         this.tag += this.HTML[this.cursorPosition];
//       }

//       if (this.HTML[this.cursorPosition] === '<') {
//         this.tempTypeSpeed = 0;
//         if (this.tagOpen) {
//           this.tagOpen = false;
//           this.writingTag = true;
//         } else {
//           this.tag = '';
//           this.tagOpen = true;
//           this.writingTag = true;
//           this.tag += this.HTML[this.cursorPosition];
//         }
//       }
  
//       if (!this.writingTag && this.tagOpen) {
//         this.tag.innerHTML += this.HTML[this.cursorPosition];
//       }
  
//       if (!this.writingTag && !this.tagOpen) {
//         if (this.HTML[this.cursorPosition] === ' ') {
//           this.tempTypeSpeed = 0;
//         }
//         else {
//           this.tempTypeSpeed = (Math.random() * this.typeSpeed) + 50;
//         }
//         typer.innerHTML += this.HTML[this.cursorPosition];
//       }
  
//       if (this.writingTag === true && this.HTML[this.cursorPosition] === '>') {
//         this.tempTypeSpeed = (Math.random() * this.typeSpeed) + 50;
//         this.writingTag = false;
//         if (this.tagOpen) {
//           let newSpan = document.createElement('span');
//           typer.appendChild(newSpan);
//           newSpan.innerHTML = this.tag;
//           this.tag = newSpan.firstChild;
//         }
//       }
  
//       this.cursorPosition += 1;
//       if (this.cursorPosition < this.HTML.length - 1) {
//         let that = this;
//         setTimeout(that.type, that.tempTypeSpeed);
//       }
//     }
//   }

//   return TypeWriter;

// }());


const TypeWriter = (function() {
  let typer = document.getElementById('typewriter');
  let HTML = typer.innerHTML;

  typer.innerHTML = '';

  let cursorPosition = 0,
    tag = '',
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
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