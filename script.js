// =======================
// Part 1: Variables & Conditionals
// =======================

// Variable declarations
let name = "Faisa Mohamed";
let age = 20;
let isStudent = true;

// Conditional example
if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}

// =======================
// Part 2: Custom Functions
// =======================

// Function 1: greet user
function greetUser(userName) {
    console.log(`Hello, ${userName}! Welcome to the assignment.`);
}

// Function 2: calculate square
function square(number) {
    return number * number;
}

// Call functions
greetUser(name);
console.log("Square of 5:", square(5));

// =======================
// Part 3: Loop Examples
// =======================

// Loop example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// Loop example 2: while loop
let count = 1;
while (count <= 3) {
    console.log("While loop count:", count);
    count++;
}

// =======================
// Part 4: DOM Interactions
// =======================

// DOM Interaction 1: change text on button click
const btnChangeText = document.getElementById("btnChangeText");
btnChangeText.addEventListener("click", () => {
    document.getElementById("demoPara").textContent = "Text changed using DOM!";
});

// DOM Interaction 2: change title color
document.getElementById("title").style.color = "darkblue";

// DOM Interaction 3: loop to create multiple elements in DOM
const btnLoop = document.getElementById("btnLoop");
btnLoop.addEventListener("click", () => {
    const container = document.createElement("div");
    for (let i = 1; i <= 3; i++) {
        const newPara = document.createElement("p");
        newPara.textContent = `Paragraph ${i} added dynamically!`;
        container.appendChild(newPara);
    }
    document.body.appendChild(container);
});
