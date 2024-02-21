// Python vs JS
//# declaration 
// x=[1,3,5,7,9]
// s = None
// # process
// s=0
// for i in range(0, len(x)):
//     s=s+x[i] 
// 
// # write output
// print("Sum: ", s )
//declaration 
const x = [1, 3, 5, 7, 9]
let s
//process 
s = 0
for (let i = 0; i < x.length; i++) {
    s = s + x[i]
}
//write output 
console.log('Sum: ', s)

// DINAMIKUSAN TÍPUSOS
a = 'alma';
a = 12;
a == '12'; //true

let a = 12  // --> let a = 12;
a = a + 1   // --> a = a + 1;

10 > 5 ? "hahaha" : "hohoho"
// ha 10 nagyobb mint 5 akkor hahaha ha kisebb akkor hohoho
// ez a ${} miatt fontos, mert oda se if-et se for-t nem lehet írni

let nev = 'Győző'; // 'Győző'
let masik;         //undefined

12 == '12'  // true
12 === '12'  // false

/*
Típusok
Primitív értékek
null
undefined

Egyszerű típusok
Logikai	Boolean
Szám	Number
Szöveg	String

Összetett típusok
Objektum	Object
Tömb	Array
Függvény	Function
 */

/*
var, let, const kulcsszóval deklarálunk új változót
ezek elhagyásával → globális változó – KERÜLENDŐ!!!
Ha nincs kezdőérték → undefined
 */

/*
OPERÁTOROK
Aritmetikai operátorok
+, -, *, /, %, ++, --, unáris -, unáris +
Értékadás operátorai
=, *=, /=, %=, +=, -=, stb.
Összehasonlító operátor
===, !==, ==, !=, >, >=, <, <=
=== és !== típus és érték szerint
== és != érték szerint (automatikus konverziók)
Logikai operátorok
&&, ||, !
Szövegösszefűzés operátorai
+, +=
Bitenkénti operátorok
&, |, ^, ~, <<, >>, >>>
Speciális operátorok
? : feltételes operátor
, több kifejezés végrehajtása egy utasításban, visszatérési értéke az utolsó kifejezés
 */

/*
Vezérlési szerkezetek

// Elágazás
if (felt) {
  utasítások
}
if (felt) {
  utasítások
} else {
  utasítások
}

// Többirányú elágazás
switch(kifejezés) {
  case érték1:
    utasítások
    break;
  case érték2:
    utasítások
    break;
  default:
    utasítások
}

// Ciklusok
while (felt) {
  utasítások
}
do {
  utasítások
} while (felt);
for (let i=1; i<=n; i++) {
  utasítások
}
 */

/*
Függvények:
Python:
def factorial(n):
    f = 1
    for i in range(2, n+1):
        f *= i

    return f
 */
function factorial(n) {
    let f = 1;
    for (let i = 2; i <= n; i++) {
        f *= i;
    }
    return f;
}

// ALAPÉRTELMEZETT ÉRTÉKEK
// függvénydeklarációó
function add(a, b = 3) {
    return a + b;
}

// függvényhívás
add(40, 2)      // 42
add(10)         // 13
add(50, 20, 10) // 70
add()           // NaN

// LÉTREHOZÁSI FORMÁK
// függvénydeklaráció
function add(a, b) {
    return a + b;
}

// függvénykifejezés
const add = function (a, b) {
    return a + b;
}

// fat arrow
const add = (a, b) => {
    return a + b;
}
const add = (a, b) => a + b;

// LITERÁLFORMA
/*
function (a, b) {
    return a + b;
}
nekem errort ír
*/

// or

(a, b) => a + b

// FÜGGVÉNY MINT PARAMÉTER
function countA(str) {
    let count = 0;
    for (const c of str) {
        if (c === 'a') {
            count++;
        }
    }
    return count;
}

console.log(countA("apple")) // 1
function count(str, fn) {
    let db = 0;
    for (const c of str) {
        if (fn(c)) {
            db++;
        }
    }
    return db;
}

console.log(
    count("apple", c => c === 'a')
)

// Tömbök

//LÉTREHOZÁS
//Literálforma: []

// creation
const uresTomb = [];
const tomb = [12, 'alma', true];

// referencing an element
tomb[0]; // => 12;
tomb[1]; // => 'alma';
tomb[2]; // => true;

// length
tomb.length; // => 3

// MÓDOSÍTÁS
const tomb = [12, 'alma', true];

// modification
tomb[0] = 13;

// new element at the end
tomb.push("new");

// new element somewhere (not recommended)
tomb[100] = 'far away';
tomb.length; // => 101
tomb[99]; // => undefined

// deleting (size remains the same)
delete tomb[1];
tomb[1]; // => undefined
tomb.length; // => 101

//MÁTRIX
//Tömbök tömbje
const m = [
    [1, 2, 3],
    [4, 5, 6],
];

m[1][2]; // => 6

// ITERATÍV FELDOLGOZÁS
const gyumolcsok = [
    'alma',
    'korte',
    'szilva'
];

//A gyümölcsök kiírása a konzolra
for (let i = 0; i < gyumolcsok.length; i++) {
    console.log(gyumolcsok[i]);
}

// for..of ciklus (ES6)
for (const gyumolcs of gyumolcsok) {
    console.log(gyumolcs);
}

/*
TÖMB MŰVELETEK
pop(), push(e), shift(e), unshift(): végéről, végére, elejére,elejéről
reverse(): megfordít
splice(honnan, mennyit): kivág
join(szeparátor): szöveggé fűz
indexOf(elem): keresés
includes(elem): eldöntés
 */
const t = [1, 2, 3, 4, 5];
t.push(6);      // [1, 2, 3, 4, 5, 6]
t.pop();        // --> 6, [1, 2, 3, 4, 5]
t.unshift(0);   // [0, 1, 2, 3, 4, 5]
t.shift();      // --> 0, [1, 2, 3, 4, 5]
t.reverse();    // [5, 4, 3, 2, 1]
t.splice(2, 1); // [5, 4, 2, 1]
t.join('###');  // "5###4###2###1"

// PÉLDA – KIVÁLOGATÁS
const numbers = [1, 2, 3, 4, 5];

function filter(x, fn) {
    const out = [];
    for (const e of x) {
        if (fn(e)) {
            out.push(e);
        }
    }
    return out;
}

const evens = filter(numbers, e => e % 2 === 0);

// instead

const evens = numbers.filter(e => e % 2 === 0);

// PÉLDA – ÖSSZEGZÉS
function sum(x) {
    let s = 0;
    for (const e of x) {
        s = s + e;
    }
    return s;
}

// instead

x.reduce((s, e) => s + e, 0);

// REFERENCIATÍPUS
// const reference, content dynamic
const x = []
x.push(10)

// copy reference
const x1 = [1, 2, 3]
const x2 = x1
x2[1] = 20
console.log(x1) // --> [1, 20, 3]

// shallow copy
const x3 = [1, 2, 3]
const x4 = x3.slice()
// const x4 = x3.concat()
x4[1] = 20
console.log(x3) // --> [1, 2, 3]

const m1 = [
    [1, 2, 3],
    [4, 5, 6],
]
const m2 = m1.concat()
m2[0][1] = 20
console.log(m1[0]) // --> [1, 20, 3]

// deep copy
const m3 = [
    [1, 2, 3],
    [4, 5, 6],
]
const m4 = JSON.parse(JSON.stringify(m3))
m4[0][1] = 20
console.log(m3[0]) // --> [1, 2, 3]


// DESTRUCTURING AND SPREAD
const numbers = [1, 2, 3, 4, 5];
const a = numbers[0];
const b = numbers[1];

// instead
const [a, b] = numbers;

// default values
const [a = 10, b = 20] = [100] // a:100, b:20

// rest
const [a, b, ...rest] = numbers; // --> rest:[3, 4, 5]

// swapping variables
[a, b] = [b, a]

// ignoring
const [a, , b] = numbers; // a:1, b:3

// spread
const a = [1, 2, 3];
const b = [9, ...a, 10]; // b:[9, 1, 2, 3, 10]

//A JAVASCRIPT NYELV
//OBJEKTUM
//LÉTREHOZÁS
//Literálforma: { }
// creation
const uresObj = {};
const obj = {
    mezo1: 12,
    'mezo2': 'alma',
};
// referencing
obj.mezo1;      // => 12
obj['mezo1'];   // => 12

//MÓDOSÍTÁS
// modification
obj.mezo2 = 'korte';

// extending
obj.mezo3 = true;

// deletion
delete obj.mezo1;
obj.mezo1; // => undefined

// METÓDUS (FÜGGVÉNY MINT ADATTAG)
const obj = {
    data: 42,
    metodus: function () {
        console.log('Foo: ', this.data);
    },
    metodus2() {
        console.log('Foo: ', this.data);
    }
};

obj.metodus();
obj.metodus2();

// GETTER ÉS SETTER
const obj = {
    _data: 42,
    get data() {
        return _data;
    },
    set data(value) {
        _data = value;
    }
};

obj.data = 52;
obj.data; // 52

// DINAMIKUS MEZŐNÉV
// Computed property names
const prop = 'foo';
const o = {
    [prop]: 'something',
    ['b' + 'ar']: 'new'
};

o.foo; // 'something'
o.bar; // 'new'

// OBJEKTUM
//Tömb az objektumban
const zsofi = {
    kor: 7,
    kedvencEtelek: [
        'krumplipüré',
        'rántott hús',
        'tejberizs'
    ]
};
//Elem elérése
zsofi.kedvencEtelek[1];
// => 'rántott hús'
//Objektum az objektumban
const david = {
    kor: 4,
    cim: {
        iranyitoszam: '1241',
        varos: 'Budapest',
        utca: 'Egyszervolt utca',
        hazszam: 63
    }
};
//Elem elérése
david.cim.utca;
// => 'Egyszervolt utca'

// FELDOLGOZÁS
const matyi = {
    kor: 1.5,
    fiu: true,
    cuki: true
}

// Feldolgozás a for..in ciklussal
for (const i in matyi) {
    console.log(i, matyi[i]);
}
// Eredmény
// => kor 1.5
// => fiu true
// => cuki true

// ADATSZERKEZETEK MODELLEZÉSE
//C++ vector --> JS tömb
const kutyuk = [
    'telefon',
    'fülhallgató',
    'pendrive',
    'e-könyv olvasó'
];
//C++ struct --> JS objektum
const hallgato = {
    nev: 'Mosolygó Napsugár',
    neptun: 'kod123',
    szak: 'Informatika BSc'
};
//Rekordok tömbje
const hallgatok = [
    {
        nev: 'Mosolygó Napsugár',
        neptun: 'kod123',
        szak: 'Informatika BSc'
    },
    {
        nev: 'Kék Ibolya',
        neptun: 'kod456',
        szak: 'Informatika BSc'
    }
];

// ADATSZERKEZETEK MODELLEZÉSE
//Tömböt tartalmazó rekordok tömbje
const hallgatok = [
    {
        nev: 'Mosolygó Napsugár',
        neptun: 'kod123',
        szak: 'Informatika BSc',
        targyak: [
            'Programozás',
            'Webfejlesztés 2.',
            'Számítógépes alapismeretek'
        ]
    },
    {
        nev: 'Kék Ibolya',
        neptun: 'kod456',
        szak: 'Informatika BSc',
        targyak: [
            'Programozás',
            'Webfejlesztés 2.',
            'Diszkrét matematika',
            'Testnevelés'
        ]
    }
];

// REFERENCIATÍPUS
// const reference, content dynamic
const o = {}
o.field1 = 12

// copy reference
const o1 = {field1: 2}
const o2 = o1
o2.field1 = 20
console.log(o1) // --> { field1: 20 }

// shallow copy
const o3 = {field1: 2}
const o4 = {}
for (let key in o3) {
    o4[key] = o3[key]
}
// Object.assign(o4, o3)
o4.field1 = 20
console.log(o3) // --> { field1: 2 }

const n1 = {
    field1: {subfield1_1: 1},
    field2: {subfield2_1: 2},
}
const n2 = Object.assign({}, n1)
n2.field2.subfield2_1 = 20
console.log(n1.field2) // --> { subfield2_1: 20 }

// deep copy
const n3 = {
    field1: {subfield1_1: 1},
    field2: {subfield2_1: 2},
}
const n4 = JSON.parse(JSON.stringify(n3))
n4.field2.subfield2_1 = 20
console.log(n3.field2) // --> { subfield2_1: 2 }

// DESTRUCTURING AND SPREAD
const o = {
    a: 42,
    b: 28,
}
const a = o.a
const b = o.b

// instead
const {a, b} = o;

// renaming
const {a: c, b: d} = o;

// default values
const {a = 10, b = 20} = {a: 42};
const {a: c = 10, b: d = 20} = {a: 42};

// rest
const o = {
    a: 42,
    b: 28,
    c: 12
};
const {a, ...rest} = o; // rest={b:28, c:12}

// nested objects
const david = {
    kor: 4,
    cim: {
        iranyitoszam: '1241',
        varos: 'Budapest',
        utca: 'Egyszervolt utca',
        hazszam: 63
    }
};
const {cim: {utca}} = david

// class(ES6)
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
// class – PUBLIKUS MEZŐK
class Product {
    name;
    tax = 0.2;
    basePrice = 0;
    price;

    constructor(name, basePrice) {
        this.name = name;
        this.basePrice = basePrice;
        this.price = (basePrice * (1 + this.tax)).toFixed(2);
    }
}

// 2. óra

// Példa
// Adatszerkezetek
const books = [
    {title: 'Anna Karenina', year: 1877},
    {title: 'Harry Potter és a bölcsek köve', year: 1997},
];

// Függvények
function getBooksOf1800(books) {
    const result = [];
    for (const book of books) {
        if (book.year >= 1800 && book.year < 1900) {
            result.push(book);
        }
    }
    return result;
}

const booksOf1800 = getBooksOf1800(books)

// Tömbfüggvények
const booksOf1900 = books.filter(book => book.year >= 1900 && book.year < 2000)

// Elemkiválasztás
// TÖBB ELEM KIVÁLASZTÁSA
/*
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
 */
const listItems = document.querySelectorAll('ul > li')

// Array-like object (NodeList)
for (const li of listItems) { /*...*/
}     // OK
listItems.forEach(li => { /*...*/
})        // OK
listItems.map(li => { /*...*/
})            // Wrong: not an array

// Transforming to array
const listItemsArray = Array.from(listItems);
listItemsArray.map(li => { /*...*/
});      // OK
/*
<div class="first">
    <span>Apple</span>
</div>
<div class="second">
    <span>Pear</span>
</div>
 */
const firstDiv = document.querySelector('div.first')
const spanInFirstDiv = firstDiv.querySelector('span')


//<p>This is a <span>text</span></p>

const p = document.querySelector('p');
// reading
p.innerHTML; // 'This is a <span>text</span>'
p.innerText; // 'This is a text'
// writing
p.innerHTML = 'This is a <strong>new</strong> text';

/*<form>
    Name: <input type="text" id="name">
    <input type="button" value="Say hello!" id="hello">
        <span id="output"></span>
</form>
*/
// Reading
const input = document.querySelector('#name');
const name = input.value;
// Writing
const output = document.querySelector('#output');
output.innerHTML = greet(name);

// Reading
const input = document.querySelector('#name');
const name = input.value;
// Writing
const output = document.querySelector('#output');
output.innerHTML = greet(name);

/*
<form>
    Name: <input type="text" id="name"> <br>
    <input type="button" value="Say hello!" id="hello">
        <br>
            <span id="output"></span>
</form>
*/
function greet(name) {
    return `Hello ${name}!`;
}

function handleHelloClick() {
    const name = input.value;
    const greeting = greet(name);
    output.innerHTML = greeting;
}

const input = document.querySelector('#name');
const output = document.querySelector('#output');
const hello = document.querySelector('#hello');

hello.addEventListener('click', handleHelloClick);

/*
Beolvasás: DOM objektum tulajdonságának lekérdezése
Kiírás: DOM objektum tulajdonságának módosítása
*/
/*
<!-- Reading -->
<input type="checkbox" id="accept" checked>
<script>
const elfogad = document.querySelector("#accept").checked;
</script>

<!-- Writing -->
<img src="" id="image">
    <script>
        const url = "http://images.io/example.png";
        const image = document.querySelector("#image");
        image.src = url;
    </script>
*/

//PÉLDA DOM I/O
/*
<input type="radio" name="gender" value="male" checked> Male
<input type="radio" name="gender" value="female"> Female
Maiden name: <input id="maidenName">
    <script>
        // Reading
        const femaleRadio =
        document.querySelector("[name=gender][value=female]");
        const isFemale = famaleRadio.checked;
        // Writing
        document.querySelector("#maidenName").hidden = !isFemale;
    </script>
*/

// HTML GENERÁLÁS
// Rövid statikus szöveg megadása
const html1 = `<h1>Hello there!</h1>`;

// Többsoros statikus szöveg megadása
const html2 = `
  <div>
    <p>No, <strong>I</strong> am your father!</p>
  </div>
`;

// Változók behelyettesítése
const callsign = 'Red 5';
const html3 = `${callsign}, standing by.`;

// Tömbök kiírása leképezéssel
const callsigns = ["Red 10", "Red 7", "Red 3", "Red 6", "Red 9"];
const html4 = `
  <p>All wings, report in.</p>
  <ul>
    ${callsigns.map(callsign => `
      <li>${callsign}, standing by.</li>
    `).join("")}
  </ul>
`;

// Feltételes kiírás (elágazás)
const chanceOfSuccess = 0.4;
const html5 = `
  <span>
    I have a 
    ${chanceOfSuccess < 0.5 ? "bad" : "good"}
    feeling about this.
  </span>
`;

// Függvényekkel
function hanDescription(properties) {
    return `
    You
    <ul>
      ${properties.map(hanProperty).join("")}
    </ul>
    Nerf Herder!
  `;
}

function hanProperty(property) {
    return `<li>${property}</li>`;
}

const hanProperties = [
    "stuck up",
    "half witted",
    "scruffy looking"
];
const html6 = hanDescription(hanProperties);

/*
<body>
  <ul>
    <li>First</li>
    <li>Second</li>

    <li>Third</li>
  </ul>

</body>
 */

const p = document.createElement('p');
document.body.appendChild(p);

const newLi = document.createElement('li');
const ul = document.querySelector('ul');
const refLi =
    ul.querySelector('li:nth-of-type(3)');
ul.insertBefore(newLi, refLi);

// Stílusattribútumok programozása
/*
<div class="rodian bounty-hunter" style="bottom: 72in">
  Greedo
</div>
 */
/*
<div style="position: absolute" id="movingElement"></div>
<script>
  document.querySelector("#movingElement").style.top  = "25px";
  document.querySelector("#movingElement").style.left = "42px";
</script>
 */
/*
<style>
.box {
  position: absolute;
  width: 100px; height: 100px;
}
</style>
<div class="box" style="left: 20px"></div>
 */
const box = document.querySelector("div");
box.style.top = "30px";

box.style.top;       // "30px"  <-- JS
box.style.left;      // "20px"  <-- style attribute
box.style.width;     // ""
box.style.position;  // ""

/*
<style>
.box {
  position: absolute;
  width: 100px; height: 100px;
}
</style>
<div class="box" style="left: 20px"></div>
 */

const box = document.querySelector("div");
box.top = "30px";

const computedStyle = window.getComputedStyle(box);
computedStyle.top       // "30px"
computedStyle.left      // "20px"
computedStyle.width     // "100px"
computedStyle.position  // "absolute"

//<div class="rodian bounty-hunter">Greedo</div>
//<div class="red green blue">
const div = document.querySelector('div');
div.classList.remove("green");
div.classList.add("pink");

// váltogatás
div.classList.toggle("pink");

// feltételes megjelenítés
div.classList.toggle("pink", i < 10);

// van-e adott stílusosztály
div.classList.contains("red");  // true

// több hozzáadása egyszerre
div.classList.add("orange", "yellow");

// DOM TULAJDONSÁGOK ÉS METÓDUSOK

//<button type="submit" data-id="10" disabled>A button</button>

const button = document.querySelector('button');
// Reading
button.getAttribute('type');        // 'submit'
button.getAttribute('data-id');     // '10'
button.getAttribute('disabled');    // ''
button.getAttribute('foo');         // null or ''
button.hasAttribute('disabled');    // true
// Writing
button.setAttribute('name', 'send');
button.setAttribute('hidden', '');  // boolean attribute
button.toggleAttribute('disabled'); // toggle boolean attribute

//<div data-id="10" data-some-text="foo"></div>

const div = document.querySelector('div');
// Reading
div.dataset.id;        // "10"
div.dataset.someText;  // "foo"
// Writing
div.dataset.someText = "bar";
div.dataset.user = "John";               // --> data-user="John"
div.dataset.dateOfBirth = "2000-12-12";  // --> data-date-of-birth="2000-12-12"
// Removing
delete div.dataset.id;
// Checking
'someText' in el.dataset;  // true
'id' in el.dataset;        // false

/*
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
    <li>negyedik</li>
    <li>ötödik</li>
</ul>
 */

function getPosition(element) {
    const parent = element.parentNode;
    const children = Array.from(parent.children);

    return children.indexOf(element) + 1;
}

const secondChild = document.querySelector('ul > li:nth-child(2)');
const position = getPosition(secondChild); // 2

//Régi megoldások
alert('The Force will be with you. Always.');

const kerdes = confirm('Judge me by my size, do you?');

const target = prompt(`
  You would prefer another target?
  A military target?
  Then name the system!
`, 'Dantooine');

console.log(
    `${target} is too remote to make an effective demonstration!`
);

//<div className="human hero">Aragorn</div>

const div = document.querySelector('div')
div.className   // 'human hero'
div.className = 'human king'


// 3. óra
//DOM
/*
<form>
  Name: <input type="text" id="name"> <br>
  <input type="button" value="Say hello!" id="hello">
  <br>
  <span id="output"></span>
</form>
 */

function greet(name) {
    return `Hello ${name}!`;
}

const input = document.querySelector('#name');
const output = document.querySelector('#output');
const hello = document.querySelector('#hello');

function handleHelloClick() {
    const name = input.value;
    const greeting = greet(name);
    output.innerHTML = greeting;
}

hello.addEventListener('click', handleHelloClick);

// ESEMÉNYKEZELŐ FÜGGVÉNYEK REGISZTRÁLÁSA

// Egyszerűbb esetekben
element.addEventListener(eventType, eventHandler);
element.removeEventListener(eventType, eventHandler);

// Például
const button = document.querySelector("button");

button.addEventListener("click", handleButtonClick);
button.removeEventListener("click", handleButtonClick);

function handleButtonClick() {
    // mi történjen kattintáskor
}

// helyben definiálva
element.addEventListener(eventType, function () {
});

// target.addEventListener(eventType, eventListener[, options]);
// `options` object:
// - capture: Boolean (elkapás iránya)
// - once: Boolean (egyszeri hívás, majd eltávolítás)
// - passive: Boolean (nincs preventDefault() hívás)

// target.removeEventListener(eventType, eventListener[, options]);
// options object
// - capture: Boolean

// Csak a capture flag számít az eseménykezelő azonosításában
// a type és listener mellett
// Névtelen függvényt nem lehet eltávolítani (nincs rá referencia)
// kivéve: `once` option

target.addEventListener('click', onClick, {once: true});

// Egy elem egy eseményéhez több eseménykezelő függvény
button.addEventListener("click", handleButtonClick1);
button.addEventListener("click", handleButtonClick2);

// Több eseményhez ugyanaz az eseménykezelő függvény
button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);

/*
<form>
  Name: <input type="text" id="name"> <br>
  <input type="button" value="Say hello!" id="hello">
  <br>
  <span id="output"></span>
</form>
 */

function greet(name) {
    return `Hello ${name}!`;
}

function handleHelloClick() {
    // beolvasás
    const name = input.value;
    // feldolgozás
    const greeting = greet(name);
    // kiírás
    output.innerHTML = greeting;
}

const input = document.querySelector('#name');
const output = document.querySelector('#output');
const hello = document.querySelector('#hello');
hello.addEventListener('click', handleHelloClick);

/*
<ul>
  <li>
    <a href="http://www.elte.hu">ELTE</a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu">ELTE IK</a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu/mot">ELTE IK MOT</a>
  </li>
</ul>
 */

function handleEvent(event) {
    console.log(event);
}

const link = document.querySelector('#link1');

function handleLinkClick(event) {
    if (!event.shiftKey) {
        return;
    }

    const href = link.href;
    console.log(href);
    alert('stop');
}

link.addEventListener('click', handleLinkClick);

function handleEvent(event) {
    event.preventDefault();
}

const link = document.querySelector('#link1');

function handleLinkClick(event) {
    if (!event.shiftKey) {
        return;
    }

    event.preventDefault();
    const href = link.href;
    console.log(href);
}

link.addEventListener('click', handleLinkClick);

const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');

function handleLinkClick1(event) { /* ... */
}

function handleLinkClick2(event) { /* ... */
}

function handleLinkClick3(event) { /* ... */
}

link1.addEventListener('click', handleLinkClick);
link2.addEventListener('click', handleLinkClick2);
link3.addEventListener('click', handleLinkClick3);

const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');

function handleLinkClick(event) {
    if (!event.shiftKey) {
        return;
    }

    event.preventDefault();
    const href = this.href;
    console.log(href);
}

link1.addEventListener('click', handleLinkClick);
link2.addEventListener('click', handleLinkClick);
link3.addEventListener('click', handleLinkClick);

const linkList = document.querySelectorAll('#linkList li a');

function handleLinkClick(event) {
    if (!event.shiftKey) {
        return;
    }

    event.preventDefault();
    const href = this.href;
    console.log(href);
}

for (const link of linkList) {
    link.addEventListener('click', handleLinkClick);
}

/*
<ul id="linkList">
  <li>
    <a href="http://www.elte.hu">ELTE</a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu">ELTE IK</a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu/mot">ELTE IK MOT</a>
  </li>
</ul>
 */

const linkList = document.querySelector('#linkList');

function handleListClick(event) {
    if (!event.shiftKey) {
        return;
    }

    const target = event.target;

    if (!target.matches('li a')) {
        return;
    }

    event.preventDefault();
    const href = target.href;
    console.log(href);
}

linkList.addEventListener('click', handleListClick);

/*
<ul>
  <li>
    <a href="http://www.elte.hu">
      <span>ELTE</span>
    </a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu">
      ELTE <span>IK</span>
    </a>
  </li>
  <li>
    <a href="http://www.inf.elte.hu/mot">
      Médiainformatikai Tanszék
    </a>
  </li>
</ul>
 */

function handleClick(event) {
    const handlerElement = this;
    const sourceElement = event.target;
    const selector = '.foo';

    let element = sourceElement;

    while (
        element !== handlerElement &&
        !element.matches(selector)
        ) {
        element = element.parentNode;
    }

    if (element !== handlerElement) {
        const targetElement = element;
        console.log(targetElement);
    }
}

function handleClick(event) {
    const handlerElement = this;
    const sourceElement = event.target;
    const selector = '.foo';

    const closestElement =
        sourceElement.closest(selector);

    if (handlerElement.contains(closestElement)) {
        const targetElement = closestElement;
        console.log(targetElement);
    }
}

function onClick(event) {
    const handlerElement = this;
    const sourceElement = event.target;
    const selector = 'li a';

    const closestElement =
        sourceElement.closest(selector);

    if (handlerElement.contains(closestElement)) {
        const targetElement = closestElement;

        if (!event.shiftKey) {
            return;
        }

        event.preventDefault();
        console.log(targetElement.href);
    }
}

function delegate(parent, type, selector, handler) {

    function delegatedFunction(event) {
        const handlerElement = this;
        const sourceElement = event.target;

        const closestElement =
            sourceElement.closest(selector);

        if (handlerElement.contains(closestElement)) {
            const targetElement = closestElement;
            handler.call(targetElement, event);
        }
    }

    parent.addEventListener(type, delegatedFunction);
}

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function handleEvent(event) {
    if (!event.target.matches(selector)) {
        return;
    }

    // Do magic...
}

parent.addEventListener(type, handleEvent);

/*
<a href="http://www.elte.hu" class="info"><span>ELTE</span></a>
<a href="http://www.inf.elte.hu">ELTE <span>Informatika Kar</span></a>
<a href="http://www.inf.elte.hu/mot" class="info">Médiainformatikai Tanszék</a>
*/
delegate(document, 'click', 'a.info', handleListClick);

function handleListClick(event) {
    if (!event.shiftKey) {
        return;
    }
    event.preventDefault();
    console.log(this.href);
}

// <ul id="stars"></ul>

/*
.star {
  position: fixed;
  list-style-type: none;
}
 */

document.addEventListener("click", onDocumentClick);

function onDocumentClick(e) {
    // input
    const x = e.clientX;
    const y = e.clientY;
    // processing
    const star =
        `<li class="star" style="top:${y}px; left:${x}px;">*</li>`;
    // output
    document.querySelector("#stars").innerHTML += star;
}

/*
<ul class="list">
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>

.done:before {
  content: "✓ ";
}
 */

const ul = document.querySelector("ul.list")
ul.addEventListener("click", onListClick);

function onListClick(e) {
    if (e.target.matches("li")) {
        // input
        const li = e.target;
        // output
        li.classList.toggle("done");
    }
}

/*
<style>
    .done:before {
    content: "✓ ";
}
</style>
New todo:
    <input/>
<button>Add</button>
<ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ul>
<script>
    document.querySelector("button").addEventListener("click", newTodoClick);
    function newTodoClick(e) {
    // input
    const newTodo = document.querySelector('input').value;
    // output
    document.querySelector('ul').innerHTML += `<li>${newTodo}</li>`
}

    document.querySelector("ul").addEventListener("click", onListClick);
    function onListClick(e) {
    if (e.target.matches("li")) {
    // input
    const li = e.target;
    // output
    li.classList.toggle("done");
}
}
</script>
*/

/*
<button data-toggle-id="some-statement">
  A nyilatkozat mutatása
</button>
<div id="some-statement" hidden>
  Nyilatkozat
</div>
 */

/*
document.addEventListener('click', onTogglerClick)
function onTogglerClick(e) {
  const id = e.target.dataset.toggleId;
  if (!id) return;

  const elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
}
 */

/*
console div1 = documentum.querySelector(".piros.keretes); // 2 db sitílus együtt
console.log(div1);
div1.classList.toggle("keretes");
mozgo.style.top = "100 px"
document.addEventListener("click", onClick);
function onClick() {
    //const top = mozgo.style.top; először számá kell majd alakítani, mert 20px + 20 = 20px20
    const top = parseInt(mozgo.style.top);
    mozgo.style.top = `${top + 20}px`// random kattintásra lejjebb megy
}
//hogy fluid legyen:
.mozgo{
    transition tqp 1s; //vagy all legyen beállítva ??
}
<div class="mozgo" data-custom="valami">Mozgó</div>...

//linkek
const link1 = document.querySelector("ul li:nth-child(1) a")
link1.addEventListener("click", onClick1)
console.log(link1);
function onClick(e){
    e.preventDefault();
    console.log(e);
    //alert(1);
}
function onClick(e){
    if (e.shiftKey){
        e.preventDefault();
        console.log(link1.href);
    }
}
const link2 = document.querySelector("ul li:nth-child(2) a")
link2.addEventListener("click", onClick2)
function onClick2(e){
    if (e.shiftKey){
        e.preventDefault();
        console.log(link2.href);
    }
}
----
screenx/y: screen bal felső sarktától
clientx/y: oldal bal felső sarktától
...: adott modul bal felső sarktától
---
const link1 = document.querySelector("ul li:nth-child(1) a")
link1.addEventListener("click", onClick)
const link2 = document.querySelector("ul li:nth-child(2) a")
link2.addEventListener("click", onClick)
const link3 = document.querySelector("ul li:nth-child(3) a")
link3.addEventListener("click", onClick)

const links = document.querySelector("ul a")
for (const link of links){
    link.addEventListener("click", katt)
}

function katt(e){
    if (e.shiftKey){
        e.preventDefault();
        console.log(this.href);
    }
}

---
// dinamikusan hozzáadott linkekkel is működjön
const ul = document.querySelector("ul");
ul.addEvent.Listener("click", kattintas);
function kattintas(e){
    console.log(e.target);
    if (e.target.matches("a")){
        if (e.shiftKey) {
        e.preventDefault();
        console.log(e.target.href);
    }
}
ul.innerHTML += `
    <li>
        <a href="gtk.elte.hu">GTK<\a>
    <\li>`

mi történik. ha spanra kattintok?: fel kell léptetni az 'a'-ig
closest felfele ugrik (akár túlugrik), contains lefele
the best delegate
*/