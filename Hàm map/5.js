const animal = [
    {
        id: 1,
        name: "cho"
    },
    {
        id: 2,
        name: "meo"
    }
];

var newanimal = animal.map(function (animal) {
    if (animal.id == 1) {
        animal.name = "python";
    }
    return animal;
});

console.log(newanimal);
