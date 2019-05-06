let who=[
    "my friend",
    "my sister",
    "my mom",
    "my dog",

];

let what=[
    "ate my food",
    "burned my homework",
    "lost my phone",
    "drop my plate",

];

let when=[
    "yesterday",
    "when I was outside",
    "when I was sleeping",
    "today"
];

let myFriend=who[Math.floor(Math.random()*(who.length))];
let ateMyFood=what[Math.floor(Math.random()*(what.length))];
let yesterday=when[Math.floor(Math.random()*(when.length))];

console.log(myFriend+" " + ateMyFood+" " +yesterday+".");
document.querySelector(".excuse").innerHTML =(myFriend+" " + ateMyFood+" " +yesterday+".") ;


