var faveGames = [
    "link to the past",
    "breath of the wild",
    "super smash bros ultimate",
    "slay the spire",
    "rocket league"
];

let updatedList = ["barbie dreamhouse 2", ...faveGames, "barbie dreamhouse 1"];
// faveGames = ["barbie dreamhouse 2", ...faveGames, "barbie dreamhouse 1"];
// console.log(updatedGames);
const [first,, ...others] = faveGames;
// console.log(others);

// const lttp = {
//     name: "Legend of Zelda Link to the Past",
//     company: "Nintendo",
//     year: 1991,
//     genre: "adventure"
// }

// var {company, name, ...details} = lttp;
// // console.log(details);

// const island = {
//     name: "Secret of Monkey Island 2",
//     company: "LucasArts",
//     ...details
// }
// console.log(details);
// console.log(island);

//FUNCTIONS
function doThing(message){
    console.log(message);
}

// doThing("hey there!");

function repeater(times, action){
    for(let i = 0; i < times; i++){
        action();
    }
}
// repeater(10,function(){console.log("wooooaaahh!!!!")});
// repeater(10,()=>{console.log("wooooaaahh!!!!")});

//before arrow function
// function repeater(times, action){
//     for(let i = 0; i < times; i++){
//         action();
//     }
// }

// var arrowRepeater = (times, action) => {
//     for(let i = 0; i < times; i++){
//         action();
//     }
// }
// arrowRepeater(5, ()=>{console.log("5 times!")});
// arrowRepeater = "hey there!";
// console.log(arrowRepeater());
// arrowRepeater()

const someNums = [4,8,15,16,23,42];
// console.log(someNums.map((num)=>{return num * 2}));
console.log(someNums.filter((num)=>{return num % 2 === 0}).map((num)=>{return num * 2}));

// faveGames.map()