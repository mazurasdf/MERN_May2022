// console.log("hey there");

// var faveFlavor = "pistachio";
// console.log(faveFlavor);

function doThing(){
    //var faveFlavor;
    // console.log(faveFlavor);

    if(false){
        var faveFlavor = "pistachio";
    }
    console.log(faveFlavor);
}

// doThing();
// console.log(faveFlavor);

function doOtherThing(){
    //var funFlavor;
    // console.log(funFlavor);

    // let funFlavor;
    if(true){
        console.log(funFlavor);

        let funFlavor = "cake batter";
    }
    // console.log(funFlavor);

    // for(let i = 0; i < 10; i++){
        
    // }
    // console.log(i);
}

// console.log(funFlavor);
// doOtherThing();

// const cannot be redeclared
// const bestFlavor = "cookie dough";
// bestFlavor = "chocolate";

const sundae = {
    "flavor": "vanilla",
    "sauce": "hot fudge",
    "nuts": "pecans",
    "toppings": ["rainbow spranks", "whipped cream"]
}
sundae.flavor = "chocolate";
sundae.name = "the mike special";

// console.log(sundae.things.flavor);
// console.log(sundae);

//will not work!
// sundae = {
//     "flavor": "vanilla",
//     "sauce": "caramel",
//     "nuts": "pecans",
//     "toppings": ["rainbow spranks", "whipped cream"]
// }

const {toppings, flavor, banana} = sundae;
sundae.toppings.push("cherry");
// console.log(toppings);

const [first,, whatever] = toppings;
console.log(first, whatever);