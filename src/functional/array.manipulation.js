const arr = [5, 1, 3, 2, 6];

const odd = arr.filter(isOdd);
const even = arr.filter(isEven);
const maxValue = arr.reduce((max, curr) => {
    if (max < curr) {
        max = curr;
    }
    return max;
}, Number.MIN_VALUE);

const sum = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

console.log(`odd: ${odd}`);
console.log(`even: ${even}`);
console.log(`sum: ${sum}`);
console.log(`maxValue: ${maxValue}`);



const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "amarendra", lastName: "kumar", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "nagendra", lastName: "kumar", age: 26 }
]

const firstNameAndLastName = users.map((user) => {
    return user.firstName.concat(" ").concat(user.lastName);
})

const findUserByAge = (age) => users.filter((user) => {
    if (user.age === age) {
        return user;
    }
})

const groupUsersByAge = users.reduce((acc, user) => {
    console.log(`acc: ${JSON.stringify(acc)} , user: ${JSON.stringify(user)}`)
    if (acc[user.age] === "undefined") {
        acc.set(user.age, [user]);
    } else {
        acc.get(user.age).push(user);
    }
    return acc;
}, new Map())

console.log(`firstNameAndLastName: ${firstNameAndLastName}`)
console.log(`findUserByAge(50): ${JSON.stringify(findUserByAge(50))}`)
const map = new Map();
map.
console.log(`groupUsersByAge: ${JSON.stringify(groupUsersByAge)}`)