import {
  countUsersByAge,
  findUserByAge,
  firstNameAndLastName,
  firstNameOfUsersWhoseAgeIsLessThan,
  firstNameOfUsersWhoseAgeIsLessThanWithReduce,
  groupUsersByAge,
  isEven,
  isOdd,
  maxValue,
  sum,
} from './array.manipulation';

const users = [
  { firstName: 'akshay', lastName: 'saini', age: 26 },
  { firstName: 'amarendra', lastName: 'kumar', age: 75 },
  { firstName: 'elon', lastName: 'musk', age: 50 },
  { firstName: 'nagendra', lastName: 'kumar', age: 26 },
];

describe('MaxValue test', () => {
  it('should return max value from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(maxValue(arr)).toBe(5);
  });

  it('should return 0 value from a empty array', () => {
    const arr = [];
    expect(maxValue(arr)).toBe(0);
  });
});

describe('Sum test', () => {
  it('should return 15 as sum for an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sum(arr)).toBe(15);
  });

  it('should return 0 as sum from a empty array', () => {
    const arr = [];
    expect(sum(arr)).toBe(0);
  });
});

describe('Is Odd test', () => {
  it('should return true for odd number', () => {
    expect(isOdd(5)).toBeTruthy();
  });

  it('should return false for non odd number', () => {
    expect(isOdd(4)).toBeFalsy();
  });
});

describe('Is Even test', () => {
  it('should return true for even number', () => {
    expect(isEven(4)).toBeTruthy();
  });

  it('should return false for non even number', () => {
    expect(isEven(5)).toBeFalsy();
  });
});

describe('test firstNameAndLastName', () => {
  it('should return first and last name for good array', () => {
    expect(firstNameAndLastName(users)).toEqual([
      'akshay saini',
      'amarendra kumar',
      'elon musk',
      'nagendra kumar',
    ]);
  });
  it('should return first and last name for array without firstName', () => {
    const badUsers = [...users, { lastName: 'saini', age: 26 }];
    expect(firstNameAndLastName(badUsers)).toEqual([
      'akshay saini',
      'amarendra kumar',
      'elon musk',
      'nagendra kumar',
    ]);
  });
  it('should return first and last name for array without lastName', () => {
    const badUsers = [...users, { firstName: 'amar', age: 26 }];
    expect(firstNameAndLastName(badUsers)).toEqual([
      'akshay saini',
      'amarendra kumar',
      'elon musk',
      'nagendra kumar',
    ]);
  });
});

describe('test findUserByAge', () => {
  it('should return user with age 26 for good array', () => {
    expect(findUserByAge(users, 26)).toEqual([
      {
        age: 26,
        firstName: 'akshay',
        lastName: 'saini',
      },
      {
        age: 26,
        firstName: 'nagendra',
        lastName: 'kumar',
      },
    ]);
  });

  it('should return user with age 26 for bad array', () => {
    const badUsers = [...users, { firstName: 'amar', lastName: 'saini' }];
    expect(findUserByAge(badUsers, 26)).toEqual([
      {
        age: 26,
        firstName: 'akshay',
        lastName: 'saini',
      },
      {
        age: 26,
        firstName: 'nagendra',
        lastName: 'kumar',
      },
    ]);
  });
});

describe('test groupUsersByAge', () => {
  it('should group user with age for good array', () => {
    expect(groupUsersByAge(users)).toEqual({
      26: [
        { age: 26, firstName: 'akshay', lastName: 'saini' },
        { age: 26, firstName: 'nagendra', lastName: 'kumar' },
      ],
      50: [{ age: 50, firstName: 'elon', lastName: 'musk' }],
      75: [{ age: 75, firstName: 'amarendra', lastName: 'kumar' }],
    });
  });

  it('should group user with age for bad array', () => {
    const badUsers = [...users, { firstName: 'amar', lastName: 'saini' }];
    expect(groupUsersByAge(badUsers)).toEqual({
      26: [
        { age: 26, firstName: 'akshay', lastName: 'saini' },
        { age: 26, firstName: 'nagendra', lastName: 'kumar' },
      ],
      50: [{ age: 50, firstName: 'elon', lastName: 'musk' }],
      75: [{ age: 75, firstName: 'amarendra', lastName: 'kumar' }],
    });
  });
});

describe('test countUsersByAge', () => {
  it('should count user with age for good array', () => {
    expect(countUsersByAge(users)).toEqual({
      26: 2,
      50: 1,
      75: 1,
    });
  });

  it('should count user with age for bad array', () => {
    const badUsers = [...users, { firstName: 'amar', lastName: 'saini' }];
    expect(countUsersByAge(badUsers)).toEqual({
      26: 2,
      50: 1,
      75: 1,
    });
  });
});

describe('test firstNameOfUsersWhoseAgeIsLessThan', () => {
  it('should name of user whose Age is less than 30', () => {
    expect(firstNameOfUsersWhoseAgeIsLessThan(users, 50)).toEqual([
      'akshay',
      'nagendra',
    ]);
    expect(firstNameOfUsersWhoseAgeIsLessThanWithReduce(users, 50)).toEqual([
      'akshay',
      'nagendra',
    ]);
  });

  it('should name of user whose Age is less than 30 for bad array', () => {
    const badUsers = [...users, { firstName: 'amar', lastName: 'saini' }];
    expect(firstNameOfUsersWhoseAgeIsLessThan(badUsers, 50)).toEqual([
      'akshay',
      'nagendra',
    ]);
    expect(firstNameOfUsersWhoseAgeIsLessThanWithReduce(badUsers, 50)).toEqual([
      'akshay',
      'nagendra',
    ]);
  });
});
