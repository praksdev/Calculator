var calculator = function() {
    var operators = ['+', '-', '*', '/', '='],
        lastNumber = null,
        currop,
        result=0;
        add = function(){
            var args = Array.prototype.slice.call(arguments, 0), sum=0;
            for(var i=0;i<arguments.length;i++){
                sum += arguments[i];
            }
            return sum;
        }
        subtract = function(x, y) {
            return x - y;
        },

        multiply = function(x, y) {
            return x * y;
        },

        divide = function(x, y) {
            if (y == 0) {
                return 0;
            }
            return x / y;
        },

        calculateResult = function(currop) {
            var cNumber;
            switch (currop) {
            //In order to maintain robustness of the methods, not using eval() here, which is a much simpler approach.
            case '+':
                result = add(lastNumber, cNumber);
                break;
            case '-':
                result = subtract(lastNumber, cNumber);
                break;
            case '*':
                result = multiply(lastNumber, cNumber);
                break;
            case '/':
                result = divide(lastNumber, cNumber);
                break;
            }
            lastNumber = result;
        },

        clearAll = function() {
            result = 0;
        };

    return {
        calculateResult: calculateResult,
        clearAll: clearAll,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
};