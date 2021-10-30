export const maxValue = (arr) =>
  arr.reduce((max, curr) => {
    if (max < curr) {
      max = curr;
    }
    return max;
  }, 0);

export const sum = (arr) =>
  arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);

export function isOdd(x) {
  return x % 2;
}

export function isEven(x) {
  return x % 2 === 0;
}

const users = [
  { firstName: 'akshay', lastName: 'saini', age: 26 },
  { firstName: 'amarendra', lastName: 'kumar', age: 75 },
  { firstName: 'elon', lastName: 'musk', age: 50 },
  { firstName: 'nagendra', lastName: 'kumar', age: 26 },
];

export const firstNameAndLastName = users.map((user) => {
  return user.firstName.concat(' ').concat(user.lastName);
});

export const findUserByAge = (age) =>
  users.filter((user) => {
    if (user.age === age) {
      return user;
    }
  });

export const groupUsersByAge = (users) =>
  users.reduce((acc, user) => {
    if (acc[user.age]) {
      acc[user.age].push(user);
    } else {
      acc[user.age] = [user];
    }
    return acc;
  }, {});

export const countUsersByAge = (users) =>
  users.reduce((acc, user) => {
    if (acc[user.age]) {
      acc[user.age] = ++acc[user.age];
    } else {
      acc[user.age] = 1;
    }
    return acc;
  }, {});

export const firstNameOfUsersWhoseAgeIsLessThan = (users, age) =>
  users.filter((user) => user.age < age).map((user) => user.firstName);

export const firstNameOfUsersWhoseAgeIsLessThanWithReduce = (age) =>
  users.reduce((acc, user) => {
    if (user.age < age) {
      acc.push(user.firstName);
    }
    return acc;
  }, []);
