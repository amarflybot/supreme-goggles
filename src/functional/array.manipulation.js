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

export const firstNameAndLastName = (users) =>
  users
    .filter((user) => user.firstName && user.lastName)
    .map((user) => user.firstName + ' ' + user.lastName);

export const findUserByAge = (users, age) =>
  users.filter((user) => {
    if (user.age === age) {
      return user;
    }
  });

export const groupUsersByAge = (users) =>
  users.reduce((acc, user) => {
    if (user.age) {
      if (acc[user.age]) {
        acc[user.age].push(user);
      } else {
        acc[user.age] = [user];
      }
    }
    return acc;
  }, {});

export const countUsersByAge = (users) =>
  users.reduce((acc, user) => {
    if (user.age) {
      if (acc[user.age]) {
        acc[user.age] = ++acc[user.age];
      } else {
        acc[user.age] = 1;
      }
    }
    return acc;
  }, {});

export const firstNameOfUsersWhoseAgeIsLessThan = (users, age) =>
  users.filter((user) => user.age < age).map((user) => user.firstName);

export const firstNameOfUsersWhoseAgeIsLessThanWithReduce = (users, age) =>
  users.reduce((acc, user) => {
    if (user.age < age) {
      acc.push(user.firstName);
    }
    return acc;
  }, []);
