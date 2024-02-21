// Lehetőségek
// ✔ Ebből könnyű HTML-t generálni
let count = 3
const movies = [
        { id: 1, title: 'The Shack',  year: 2017, seen: true  },
        { id: 2, title: 'Fireproof',  year: 2008, seen: true  },
        { id: 3, title: 'Courageous', year: 2011, seen: false },
    ]
//<!-- ✔ Előfordulnak olyan adatok, amelyeket a HTML attribútumban kell tárolni -->
// <div data-id="1">The Shack</div>
//<!-- ✖ Ebből nehéz az adatot kinyerni -->
/*
<ul>
    <li data-id="1" class="seen"  >The Shack (2017)</li>
    <li data-id="2" class="seen"  >Fireproof (2008)</li>
    <li data-id="3" class="unseen">Courageous (2011)</li>
</ul>
 */

/*
<input id="newItem">
<button id="addItem">Add</button>
<ul id="todoList">
  <li>Buy milk</li>
  <li>Learn JavaScript</li>
</ul>
 */

const todoList = document.querySelector("#todoList");
const button = document.querySelector("#addItem");
const input = document.querySelector("#newItem");

function handleButtonClick() {
    const newItem = input.value;
    todoList.innerHTML += `<li>${newItem}</li>`;
}

button.addEventListener("click", handleButtonClick);

/*
<input id="newItem">
<button id="addItem">Add</button>
<ul id="todoList">
  <li>Buy milk</li>
  <li>Learn JavaScript</li>
</ul>
 */

const todoList = document.querySelector("#todoList");
const button = document.querySelector("#addItem");
const input = document.querySelector("#newItem");

function handleButtonClick() {
    const newItem = input.value;
    const newListItem = document.createElement("li");
    newListItem.innerHTML = newItem;
    todoList.appendChild(newListItem);
}

button.addEventListener("click", handleButtonClick);

/*
<ul id="todoList">
  <li>Buy milk</li>
  <li>Learn JavaScript</li>
</ul>
 */

const listItems = document.querySelectorAll("li");

function handleButtonClick() {
    // Input
    const newItem = input.value;
    const listContent = Array.from(listItems).map(li => li.innerText);
    // Process
    listContent.push(newItem);
    // Output
    const newListItem = document.createElement("li");
    newListItem.innerHTML = newItem;
    todoList.appendChild(newListItem);
}

const list = [];

function renderList(list) {
    return list.map(item => `<li>${item}</li>`).join("");
}

// ...

function handleButtonClick() {
    // Input
    const newItem = input.value;
    // Process
    list.push(newItem);
    // Output
    todoList.innerHTML = renderList(list);
}

function handleButtonClick() {
    const newItem = input.value;
    list.push(newItem);
    // Output
    const newElement = document.createElement("li");
    newElement.innerHTML = newItem;
    todoList.appendChild(newElement);
}

function renderList(list) {
    return list.map(item => `<li>${item}</li>`).join("");
}

const input = document.querySelector("input");
const button = document.querySelector("button");
const todoList = document.querySelector("ul");

function handleButtonClick() {
    // Input
    const newItem = input.value;
    // Process
    list.push(newItem);
    // Output
    todoList.innerHTML = renderList(list);
}

// Fizikai csoportosítás
// math.js
const add = (a, b) => a + b;
// app.js
console.log(add(40, 2));
/*
<body>
<!-- ... -->
<script src="math.js"></script>
<script src="app.js"></script>
</body>
 */

// math.js
export const add = (a, b) => a + b;
// app.js
import { add } from "./math.js";
console.log(add(40, 2));
/*
<body>
<!-- ... -->
<script type="module" src="app.js"></script>
</body>
 */

// Logikai csoportosítás

// Helper/utility function
function range(n) {
    return Array.from({length: n}, (e, i) => i + 1);
}

// HTML generator
function genList(list) {
    return `<ul>${list.map(e => `<li>${e}</li>`).join('')}</ul>`;
}

// Business logic
const add = (a, b) => a + b;

// Event handler
function onClick(e) {
    // ...
}

