export const people = [
    {
        id: 1,
        name: "lee-sangkyu",
        age: 24,
        gender: "female"
    },
    {
        id: 2,
        name: "park-bosung",
        age: 22,
        gender: "female"
    },
    {
        id: 3,
        name: "choi-juhyun",
        age: 25,
        gender: "male"
    },
    {
        id: 4,
        name: "kim-hyungjun",
        age: 21,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}