import animals, {useAnimals} from "./data";

// console.log(animals); Destructuring arrays const [cat,     dog] = animals;
// Destructuring objects const {     name: catName = "kitty",     sound:
// catSound = "purr",     dailyFeeding: {food: catFood, water: catWater} } =
// cat; const {     name: dogName = "puppy",     sound: dogSound = "bark",
// dailyFeeding: {food: dogFood, water: dogWater} } = dog; const [name,
// soundMakes] = useAnimals(cat); soundMakes(); console.log(catName + ": " +
// catFood + " " + catWater); console.log(dogName + ": " + dogFood + " " +
// dogWater); 

// CHALLENGE: uncomment the code below and see the car stats rendered

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda,
    tesla] = cars;

// Destructuring tesla & honda object
const {
    coloursByPopularity: [teslaTopColour],
    speedStats: {
        topSpeed: teslaTopSpeed
    }
} = tesla;
const {
    coloursByPopularity: [hondaTopColour],
    speedStats: {
        topSpeed: hondaTopSpeed
    }
} = honda;

ReactDOM.render(
    <table>
    <tbody>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Color</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </tbody>
</table>, document.getElementById("root"));