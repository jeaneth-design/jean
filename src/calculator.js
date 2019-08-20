class Calculator
{

    add(numbers)
    {

        var sum = 0

        if(numbers.length == 0){
            sum = 0
        }

        return sum

    }
}

var c = new Calculator

console.log(c.add(''))

module.exports = Calculator