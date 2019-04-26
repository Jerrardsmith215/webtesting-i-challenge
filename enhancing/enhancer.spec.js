const enhancer = require('./enhancer.js');
// test variables
const sword = {
    name: "Broad Sword",
    enhancement: 10,
    durability: 65
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

