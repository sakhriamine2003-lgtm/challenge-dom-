const body = document.getElementById("body");
const btn = document.getElementById("btn");
const bttn1 = document.getElementById("bttn1");
const Input = document.getElementById("Input");


btn.onclick = () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
};

bttn1.onclick = () => {
  Input.value = Number(Input.value) + 1;
};

bttn2.onclick = () => {
  Input.value = Number(Input.value) - 1;
};

bttn3.onclick = () => {
  Input.value = 0;
};



const input = document.getElementById("input");
const paragraphe = document.getElementById("p");

input.oninput = () => {
    paragraphe.textContent = input.value;
};


const changer = document.getElementById("changer");
const pp = document.getElementById("pp");

const table = [
    "javascripts",
    "java",
    "ttttttttt",
    "ffffffffff",
    "yyyyyyyyyyy",
    "azerty2003"
];

let clik = 0; 
changer.onclick = () => {
    pp.textContent += table[clik] + "\ /"; 
    clik++;

    if (clik >= table.length) {
        clik = 0;
    }
};
