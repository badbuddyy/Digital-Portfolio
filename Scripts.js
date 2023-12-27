
let i = 0;
let txt = '    Full Stack Developer with a degree in cybersecurity.           Please have a look around.                       ';

let speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
