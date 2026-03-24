const body = document.getElementById("body");
const btn = document.getElementById("btn");
const bttn1 = document.getElementById("bttn1");
const Input = document.getElementById("Input");


// btn.onclick = () => {
//   if (body.style.backgroundColor === "black") {
//     body.style.backgroundColor = "white";
//   } else {
//     body.style.backgroundColor = "black";
//   }
// };

// bttn1.onclick = () => {
//   Input.value = Number(Input.value) + 1;
// };

// bttn2.onclick = () => {
//   Input.value = Number(Input.value) - 1;
// };

// bttn3.onclick = () => {
//   Input.value = 0;
// };



// const input = document.getElementById("input");
// const paragraphe = document.getElementById("p");

// input.oninput = () => {
//     paragraphe.textContent = input.value;
// };


// const changer = document.getElementById("changer");
// const pp = document.getElementById("pp");

// const table = [
//     "javascripts",
//     "java",
//     "ttttttttt",
//     "ffffffffff",
//     "yyyyyyyyyyy",
//     "azerty2003"
// ];

// let clik = 0; 
// changer.onclick = () => {
//     pp.textContent += table[clik] + "\ /"; 
//     clik++;

//     if (clik >= table.length) {
//         clik = 0;
//     }
// };
// challenge 2  => Challenges de Logique & Formulaires: 

const nom =document.getElementById("nom");
const prenom =document.getElementById("prenom");
const code =document.getElementById("code");
const suivant =document.getElementById("suivant");
const precident =document.getElementById("a");
const message =document.getElementById("msg")

suivant.onclick = () => {
  console.log("botona");

  if (
    code.value.length < 8 ||
    !/[A-Z]/.test(code.value) ||
    !/[0-9]/.test(code.value)
  ) {
    message.textContent = "Mot de passe invalide";

  } else {
    message.textContent = "Valide ✅";
  }
};


const desc = document.getElementById("desc");

desc.addEventListener("input", () => {
  if (desc.value.length >= 280) {
    desc.style.color = "red";
  } else {
    desc.style.color = "";
  }
});







