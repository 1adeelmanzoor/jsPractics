var el = document.getElementById("changeBackground");
el.addEventListener("click", changeBackground);
function changeBackground(e) {
  e.currentTarget.className = e.target.getAttribute("data-class");

  let col = e.target.getAttribute("data-class");
  e.target.style.border = `5px solid ${col}`;
}

// var divs = document.getElementsByClassName("t1_colors");
// var count_of_divs = divs.length;

// for (var i = 0; i < count_of_divs; i++) {
//   divs[i].addEventListener(
//     "click",
//     function (e) {
//       document
//         .getElementById("task2")
//         .setAttribute("style", e.target.getAttribute("style"));
//       let color = e.target.getAttribute("style");
//       let colors = color.slice(color.indexOf(":") + 1);
//       let final = colors.trim().slice(0, -1);
//       // console.log(color.background);
//       // e.target.setAttribute("style", e.target.getAttribute("style"));
//       // debugger;
//       e.target.style.backgroundColor = "white";
//       e.target.style.border = `5px solid ${final}`;
//       // e.stopPropagation();
//       // e.target.style.backgroundColor = "white";
//     },
//     true
//   );

//   divs[i].addEventListener("click", function (e) {
//     document.getElementById("task3").removeAttribute("style");
//   });
// }

// second version
// const options = document.getElementsByClassName("newclass");

// for (option of options) {
//   option.onclick = function (e) {
//     if (e.target.classList.contains("clr1")) {
//       document.querySelector(".clr2").style.backgroundColor = "red";
//       document.querySelector(".clr1").style.border = "1px solid green";
//     } else if (e.target.classList.contains("clr3")) {
//       document.querySelector(".clr2").style.backgroundColor = "green";
//     }
//   };
// }

// function color(z) {
//   var a = getComputedStyle(z);
//   var b = a.backgroundColor;
//   document.getElementsByTagName("BODY")[0].style.backgroundColor = b;
// }
// "use strict";

// object lecture

// pascal convention

// create function using factory function

// function circleRadius(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("run console");
//     },
//   };
// }
// const circle12 = circleRadius(1);
// const circle13 = circleRadius(2);
// console.log(circle12);
// console.log(circle13);

// // create object through constructor

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("running");
//   };
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1);
// console.log(circle2);

// const circleRadius = {
//   radius: 1,
//   draw() {
//     console.log("run console");
//   },
// };

// for (let key in circleRadius) {
//   console.log(key, circleRadius[key]);
// }

// for (let key of Object.keys(circleRadius)) {
//   console.log(key, circleRadius[key]);
// }
// for (let entry of Object.entries(circleRadius)) {
//   console.log(entry);
// }

// clone an object
// for (let key in circleRadius) {
//   another[key] = circleRadius[key];
//   console.log(key, another[key]);
// }

// const circleRadius = {
//   radius: 1,
//   draw() {
//     console.log("run console");
//   },
// };

// const another = Object.assign({}, circleRadius);
// console.log(another);
// const another = Object.assign({}, circleRadius);

// const another = { ...circleRadius };
// console.log(another);

// const now = new Date();
// const other = new Date("2017, may, 1");
// console.log(other.toISOString());

// const fr = new Map([
//   ["type", 1],
//   ["value", 3],
// ]);
// console.log(fr);

// const fruit = new Map();
// fruit.set("apple", 200);
// console.log(fruit);
// let text = "";
// fr.forEach(function (value, key) {
//   text = key + "=" + value;
//   console.log(text);
// });

// let ar = [
//   {
//     name: "adeel",
//   },
//   {
//     name: "sul",
//   },
// ];
// const te = ar.find(function (arr) {
//   return arr.name === "adeel";
// });
// console.log(te);

// some and every

// let ar = [1, 2, -1, 32, 13];
// const n = ar.every(val => val > 0);
// console.log(n);

// let ar = [1, 2, -1, 32, 13];
// const n = ar.some(val => val > 0);
// console.log(n);

// let ar = [1, 2, -1, 32, 13];
// const f = ar.filter(n => n > 0);
// console.log(f);

// let ar = [1, 2, -1, 32, 13];
// let new_array = ar.map(n => n * 2);
// console.log(new_array);

// let ar = [1, 2, -1, 32, 13];
// let new_array = ar.reduce(
//   (accumulateor, currnetValue) => accumulateor + currnetValue
// );
// console.log(new_array);

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }
// console.log(sum(12, 12, 4, 5));

// getter and setter

// const person = {
//   fname: "adeel",
//   lname: "manzoor",
//   get fullname() {
//     return ` firs name: ${person.fname}  \n last name: ${person.lname}`;
//   },
//   set fullname(val) {
//     const part = val.split(" ");
//     this.fname = part[0];
//     this.lname = part[1];
//     return ` firs name: ${person.fname}  \n last name: ${person.lname}`;
//   },
// };

// person.fullname = "jhon smith";

// console.log(person.fullname);

// function Display(val) {
//   this.val = val;
//   console.log(this);
// }
// const s = new Display("a");

// setTimeout(mes, 2000);
// console.log("before asynchronous");
// function mes() {
//   console.log("after asynchronous");
// }

// setInterval(timeFun, 1000);

// function timeFun() {
//   let d = new Date();

//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

// function highlight(currentdiv) {
//   var divs = document.getElementsByTagName("div");
//   for (var i = 0; i < divs.length; i++) {
//     if (divs[i].className == "mybox") {
//       if (divs[i].id == currentdiv) {
//         if (divs[i].id == "P1") {
//           divs[i].style.backgroundColor = "#CCC";
//         } else if (divs[i].id == "P2") {
//           divs[i].style.backgroundColor = "red";
//           document.querySelector("#P3").style.backgroundColor = "red";
//           debugger;
//         }
//       } else {
//         divs[i].style.backgroundColor = "#ffc";
//       }
//     }
//   }
// }

// function toggleItem(elem) {
//   for (var i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function (e) {
//       for (var i = 0; i < elem.length; i++) {
//         if (elem[i].className == "mybox") {
//           if (elem[i].id == elem) {
//             if (elem[i].id) {
//               elem[i].style.backgroundColor = "#CCC";
//             } else if (elem[i].id == "P2") {
//               elem[i].style.backgroundColor = "red";
//               document.querySelector("#P3").style.backgroundColor = "red";
//               debugger;
//             }
//           } else {
//             elem[i].style.backgroundColor = "#ffc";
//           }
//         }
//       }
//       e.preventDefault();
//     });
//   }
// }
// toggleItem(document.querySelectorAll(".mybox"));

// function highlight(currentdiv) {
//   var divs = document.getElementsByTagName("div");
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener("click", function () {
//       for (let d = 0; d < divs.length; d++) {
//         divs[d].classList.remove("active");
//       }
//       divs[i].classList.add("active");
//     });
//   }
// }

// trail version

// function toggleItem(elem) {
//   for (var i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function (e) {
//       var current = this;
//       for (var i = 0; i < elem.length; i++) {
//         if (current != elem[i]) {
//           elem[i].classList.remove("active");
//         } else if (current.classList.contains("active") === true) {
//           current.classList.remove("active");
//         } else {
//           current.classList.add("active");
//         }
//       }
//       e.preventDefault();
//     });
//   }
// }
// toggleItem(document.querySelectorAll(".mybox"));

// console.log(document.querySelectorAll(".mybox"));
// var color = "5px solid #FFFF66";

// document.addEventListener("click", function handleClick(event) {
//   // const hasClass = event.target.classList.contains("box1");
//   // console.log(hasClass);
//   if (event.target.classList.contains("box1")) {
//     document.querySelector(".box1").style.backgroundColor = "#CCC";
//     document.querySelector(".box2").style.backgroundColor = "red";
//     document.querySelector(".box1").style.border = "1px solid green";
//   } else if (event.target.classList.contains("box2")) {
//     document.querySelector(".box2").style.backgroundColor = "#CCC";
//     document.querySelector(".box2").style.border = "1px solid red";
//     console.log("box2");
//   } else if (event.target.classList.contains("box3")) {
//     console.log("box3");
//   }
// });
