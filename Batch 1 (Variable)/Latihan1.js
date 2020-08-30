function makeCoffe(isHot) {
    var coffee;
    if (isHot) {
       coffee = "Make an Hot Coffee"
    } else {
       coffee = "Make a Ice Coffee"
    }

    return coffee;

}

console.log(makeCoffe(true));

// Hoisting before declarate variable

function getFood() {
    food = "Chocolate";
    console.log(food);
   var food;
}

getFood();
