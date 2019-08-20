let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });

    it("should return 3 if string is 1,2", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add('1,2');
        expect(calculatorResult).toBe(3);
    });
});