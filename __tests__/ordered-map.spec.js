const OrderedMap = require('../dist/index.cjs');

describe("OrderedMap", () => {
    test("System.iterator support", () => {
        const testObject = OrderedMap.from({
            a: 1,
            b: 2,
            c: 3
        });

        let index = 0;
        for(const [key, value] of testObject) {
            if (index === 0) {
                expect(key).toEqual('a');
                expect(value).toEqual(1);
            } else if (index === 1) {
                expect(key).toEqual('b');
                expect(value).toEqual(2);
            } else if (index === 2) {
                expect(key).toEqual('c');
                expect(value).toEqual(3);
            } else {
                throw new Error('should have not get here')
            }
            index++;
        }
    });
});
