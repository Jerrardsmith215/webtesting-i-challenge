const enhancer = require('./enhancer.js');
// test variables
const sword = {
    name: "Broad Sword",
    atk: 10,
    durability: 95
};

// test away!

// Repair function test
describe('repair function', () => {
    it('sets durability key to a value of 100', () => {
        const expected = { name: 'Broad Sword',
        atk: 10, 
        durability: 100};
        const actual = enhancer.repair(sword)

        expect(actual).toEqual(expected)
    });
});

console.log('Hi')