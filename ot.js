// Step One - function that allows creation of new object (traveler)
//          - travelers are called by 'travelerOne', 'travelTwo', etc
//          - travelers have three properties: name, food, health

function makeTraveler(travelerName) {
    return {
    name: travelerName,
    food: Math.round(Math.random()*100),
    healthy: true,
    }
}

let travelerOne = makeTraveler("Tom");
let travelerTwo = makeTraveler("Jack");
let travelerThree = makeTraveler("Ben");

console.log("--- Travelers created -----------------------------");
console.log(travelerOne);
console.log(travelerTwo);
console.log(travelerThree);


// Step Two - 'action' functions applicable to travelers only - 'hunt' and 'eat'

function hunt(traveler) {
    if (Math.random() >= 0.5){
        traveler.food = traveler.food + 100;
         } else {
            traveler.food = traveler.food + 0;
    }
}


hunt(travelerOne);
hunt(travelerTwo);
hunt(travelerThree);

console.log("--- Travelers hunt -----------------------------");
console.log(travelerOne);
console.log(travelerTwo);
console.log(travelerThree);

function eat(traveler) {
    if(traveler.food < 20){
        traveler.healthy = false;
    } else {
        traveler.food = traveler.food - 20;
    }
}

eat(travelerOne);
eat(travelerTwo);
eat(travelerThree);

console.log("--- Travelers eat -----------------------------");
console.log(travelerOne);
console.log(travelerTwo);
console.log(travelerThree);

// Step Three - function that allows creation of a new wagon
//            - wagons are called by 'wagonOne', 'wagonTwo', etc
//            - wagons have two properties - capacity and passengers, which is an array
//              of passengers

function makeWagon(capacity) {
    return {
    capacity: capacity,
    passengers: [],
    }
}

let wagonOne = makeWagon(2);
let wagonTwo = makeWagon(3);

console.log("--- Wagons built -----------------------------");
console.log(wagonOne);
console.log(wagonTwo);

// Step Four - Add the traveler to the wagon if there is space. 
//           - If there is not enough capacity, don't add them.

function join(traveler, wagon){
    if(wagon.capacity > 0){
        wagon.passengers.push(traveler);
        wagon.capacity = wagon.capacity - 1;
    } else {
        console.log("Sorry partner, no more room");
    }
    }

join(travelerOne, wagonOne);
join(travelerTwo, wagonOne);

join(travelerOne, wagonTwo);
join(travelerTwo, wagonTwo);
join(travelerThree, wagonTwo);

console.log("--- Wagons loaded -----------------------------");
console.log(wagonOne);
console.log(wagonTwo);

// Step Five - add functions applicable to wagon only (aka that take a 'wagon' object 
//             as input
//           - 'quarantine' and 'food'
//           - 'quarantine' - returns true if there is at least one unhealthy person 
//          in the wagon. Return false if not.
//           - 'food' - returns the total amount of food among all occupants of the wagon.


function quarantine(wagon){
let result = false;
    for(let i = 0; i < wagon.passengers.length; i++){
        if(wagon.passengers[i].healthy === false){
            result = true;
        }
    }

    return result;
}

function food(wagon){
    let totalFood = 0;
    for(let i = 0; i < wagon.passengers.length; i++){
        totalFood = totalFood + wagon.passengers[i].food; 
    }  
    return totalFood;
}


console.log("--- Quarantine Wagon #2 -----------------------");
console.log(quarantine(wagonTwo));

console.log("--- Food Total Wagon #2 -----------------------");
console.log(food(wagonTwo));





