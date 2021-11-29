const animals = [
    {
        name: "cat",
        sound: "meow",
        dailyFeeding: {
            food: 2,
            water: 3
        }
    }, {
        name: "dog",
        sound: "woof",
        dailyFeeding: {
            food: 5,
            water: 7
        }
    }
];

function useAnimals(animal) {
    return [
        animal.name, 
        () => {
            console.log(animal.sound);
        }
    ]
}

export default animals;
export {useAnimals};
