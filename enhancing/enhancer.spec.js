const enhancer = require('./enhancer.js');
// test variables
const sword = {
    name: "Broad Sword",
    enhancement: 10,
    durability: 65
};

const staff1 = {
    name: "Water Staff",
    enhancement: 12,
    durability: 77
};
const staff2 = {
    name: "Air Staff",
    enhancement: 15,
    durability: 75
};
const staff3 = {
    name: "Fire Staff",
    enhancement: 18,
    durability: 88
};

// test away!

// Repair function test
describe('repair function', () => {
    it('sets durability key to a value of 100', () => {
        const expected = { ...sword, 
        durability: 100};
        const actual = enhancer.repair(sword)

        expect(actual).toEqual(expected)
    });
});

// Succeed function test
describe('Succeed function', () => {
    it('increases enhancement by 1 or item does not changee', () => {
        const expected = { ...sword, enhancement: 11};
        const actual = enhancer.succeed(sword);

        expect(actual).toEqual(expected);
    });
});

// Fail function test
describe('Fail function', () => {
    // functions
    const fail = (thing) => {
        return {...thing,
        durability: thing.durability - 5
        }
    }

    const bigFail = (thing) => {
        return {...thing,
        durability: thing.durability - 10
        }
    }

    const epicFail = (thing) => {
        return { ... thing,
        durability: thing.durability - 10,
        enhancement: thing.enhancement - 1,
        }
    }

    it('if enhancement level is < 15, durability - 5', () => {
        const expected = fail(staff1);
        const actual = enhancer.fail(staff1);
        expect(expected).toEqual(actual);
    });

    it('if enhancement level is >= 15, durability - 10', () => {
        const expected = bigFail(staff2);
        const actual = enhancer.fail(staff2);
        expect(expected).toEqual(actual);
    });

    it('if enhancement level is > 16, durability -10 & enhancement -1', () => {
        const expected = epicFail(staff3);
        const actual = enhancer.fail(staff3);
        expect(expected).toEqual(actual);
    });
});