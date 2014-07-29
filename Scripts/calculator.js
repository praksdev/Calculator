var calculator = function() {
    var operators = ['+', '-', '*', '/', '='],
        eql,
        currValue,
        expValue,
        operatorSet = false,
        equalsSet = false,
        lastNumber = null,
        currNumber,
        currop,

        init = function(equals, num, inputs) {
            eql = equals;
            currNumber = num;
            registerKeys(inputs);
        },

        registerKeys = function(inputs) {
            //attach event handlers for each of the calculator keys
            for(var i=0;i<inputs.length;i++) {
                inputs[i].addEventListener("click", handleCalcKey, false);
            }

        },

        handleCalcKey = function(e) {
            var button = (e.target) ? e.target : e.srcElement,
                btnVal = button.innerHTML;
            //if the operator is found , set it as the current operator 
            if(~operators.indexOf(btnVal)) {
                setCurrentOperator(btnVal);
            }
            else if(btnVal == "C"){//on clear
                clearAll();
            }
            else {
                if (operatorSet == true || currNumber.innerHTML == '0') {
                    setValue('');
                    operatorSet = false;
                }
                setValue(currNumber.innerHTML + btnVal);
                setExpression(eql.innerHTML + btnVal);
            }
            // prevent page jumps
            e.preventDefault();
        },

        add = function(x, y) {
            return x + y;
        },

        subtract = function(x, y) {
            return x - y;
        },

        multiply = function(x, y) {
            return x * y;
        },

        divide = function(x, y) {
            if (y == 0) {
                alert("Can't divide by 0");
                return 0;
            }
            return x / y;
        },

        calculateResult = function() {
            if (!currop || lastNumber == null) return;
            var cNumber = parseFloat(currNumber.innerHTML),
                newVal = 0;
            /*switch (currop) {
            //In order to maintain robustness of the methods, not using eval() here, which is a much simpler approach.
            case '+':
                newVal = add(lastNumber, cNumber);
                break;
            case '-':
                newVal = subtract(lastNumber, cNumber);
                break;
            case '*':
                newVal = multiply(lastNumber, cNumber);
                break;
            case '/':
                newVal = divide(lastNumber, cNumber);
                break;
            }*/
            //Using eval() for its simplicity.
            try {
                newVal = eval(eql.innerHTML);
            }catch(e){console.log("Invalid Entry;")}
            setValue(newVal);
            lastNumber = newVal;
        };

        setValue = function(val) {
            currNumber.innerHTML = val;
        },

        setExpression = function(val) {
            eql.innerHTML = val;
        },

        clearAll = function() {
            lastNumber = null;
            equalsSet = operatorSet = false;
            setValue('0');
            setExpression('');
        },

        setCurrentOperator = function(op) {
            var eqText;
            //On pressing equals evaluate the expression
            if (op == '=') {
                equalsSet = true;
                calculateResult();
                setExpression('');
                return;
            }
            //case: "=" followed by one of the operators
            if (!equalsSet) calculateResult();
            equalsSet = false;
            currop = op;
            operatorSet = true;
            lastNumber = parseFloat(currNumber.innerHTML);
            eqText = (eql.innerHTML == '') ? lastNumber + currop : eql.innerHTML + currop;

            //case: "-" can be the first input
            if(currNumber.innerHTML == '0' && currop == '-') {
                setValue(currop);
                eqText = currop;
            }
            //case: if any operator is pressed successively , remove the last occuring one
            if(operators.indexOf(eql.innerHTML.slice(-1)) > -1) {
                eqText = eqText.replace(/.$/, '');
            }    
            setExpression(eqText);
        };
    return {
        init: init
    };
}();