const h2 = document.getElementById("h2");
const img = document.getElementById("img");
const h1= document.getElementById("h1");



function girar() {
  h2.style.transform = "scale(1, -1, 1)";
  h2.style.transition = "3s";
  img.style.transform = "scale(1, -1, 1)";
  img.style.transition = "3s";
  h1.style.transform = "scale(1, -1, 1)";
  h1.style.transition = "3s";

}
h2.addEventListener("mouseleave", () => 
    girar());

img.addEventListener("mouseleave", () => 
    girar());

h1.addEventListener("mouseleave", () => 
    girar());