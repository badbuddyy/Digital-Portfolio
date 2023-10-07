
let i = 0;
let txt = '    Full Stack Developer with a degree in cybersecurity.           Please have a look around.                       oh yeah...              I also speak 日本語  ¯-(ツ)-¯ ';

let speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
