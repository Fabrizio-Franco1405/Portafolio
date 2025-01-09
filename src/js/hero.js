// hero.js
const textArray = ['Desarrollador Front-End', 'Creando Nuevas Experiencias'];
let textIndex = 0;
let charIndex = 0;
let typing = true;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1000;

document.addEventListener('DOMContentLoaded', () => {
  const typeWriterElement = document.querySelector('.typewriter');
  console.log('DOM fully loaded and parsed'); // Debugging

  if (!typeWriterElement) {
    console.error("Element with class 'typewriter' not found.");
    return;
  }

  function typeWriter() {
    if (typing) {
      if (charIndex < textArray[textIndex].length) {
        typeWriterElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        typing = false;
        setTimeout(typeWriter, delayBetweenWords);
      }
    } else {
      if (charIndex > 0) {
        typeWriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
      } else {
        typing = true;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeWriter, typingSpeed);
      }
    }
  }

  typeWriter();
});
