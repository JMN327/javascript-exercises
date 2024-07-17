const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },]

function addAge(array){
    for (person in array){
        if (person["yearOfDeath"] === undefined) {
            person[age] = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person[age] = person.yearOfDeath - person.yearOfBirth;
        }
        console.log(person.age)
    }
}

console.log(addAge(people));