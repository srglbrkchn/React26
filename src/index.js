import animals from "./data";

console.log(animals);

const [cat,
    dog] = animals;

const {
    name: catName = "kitty",
    sound: catSound = "purr",
    dailyFeeding: {food: catFood, water: catWater}
} = cat;

const {
    name: dogName = "puppy",
    sound: dogSound = "bark",
    dailyFeeding: {food: dogFood, water: dogWater}
} = dog;

console.log(catName + ": " + catFood + " " + catWater);
console.log(dogName + ": " + dogFood + " " + dogWater);

// CHALLENGE: uncomment the code below and see the car stats rendered import
// React from "react"; import ReactDOM from "react-dom"; ReactDOM.render(
// <table>     <tr>       <th>Brand</th>       <th>Top Speed</th>     </tr>
// <tr>       <td>{tesla.model}</td>       <td>{teslaTopSpeed}</td>
// <td>{teslaTopColour}</td>     </tr>     <tr>       <td>{honda.model}</td>
//   <td>{hondaTopSpeed}</td>       <td>{hondaTopColour}</td>     </tr>
// </table>,   document.getElementById("root") );