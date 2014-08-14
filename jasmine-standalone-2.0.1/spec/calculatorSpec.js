describe("Calculator", function() {
	var calc;
	beforeEach(function() {
		calc = calculator();
		calc.result = 0;
	});

	it("Operators supported ", function() {
    	var operators = ["+", "-", "*", "/", "="];
    	expect(operators).toContain("+");
    	expect(operators).toContain("-");
    	expect(operators).toContain("*");
    	expect(operators).toContain("/");
    	expect(operators).not.toContain("$");
  	});

  	describe('validate calculator sequence of calls', function(){

  		it("calculates results based on inputs", function() {
		    spyOn(calc, "calculateResult");
		    calc.calculateResult("+");
		    expect(calc.calculateResult).toHaveBeenCalled();
		});

		it("Clears values to defaults called", function() {
		    spyOn(calc, "clearAll");
		    calc.clearAll();
		    expect(calc.clearAll).toHaveBeenCalled();
		});

  	});
	

	describe('When adding numbers', function() {
	    it('should store the current value at all times', function() {
	        expect(calc.result).toBeDefined();
	    });

	    it('should add numbers', function() {
	        expect(calc.add(10,5)).toEqual(15);
	    });

	    it('should add any number of numbers', function() {
	        expect(calc.add(1, 2)).toEqual(3);
	        expect(calc.add(1, 2, 3)).toEqual(6);
	    })

	    it('should add numbers with decimal values', function() {
	        expect(calc.add(53.2, 21.2)).toEqual(74.4);
	    })
	});

	describe('When dividing numbers', function() {
	    it('should divide numbers', function() {
	        expect(calc.divide(6,3)).toEqual(2);
	    });

	    it('any number multiplied by 0 is equal to 0', function() {
	        expect(calc.divide(8,0)).toEqual(0);
	    });
	});

	describe('When multiplying numbers', function() {
	    it('should multiply numbers', function() {
	        expect(calc.multiply(6,3)).toEqual(18);
	    });

	    it('any number divided by 0 is equal to 0', function() {
	        expect(calc.multiply(8,0)).toEqual(0);
	    });
	});

	describe('When substracting numbers', function() {
	    it('should substract any number of numbers', function() {
	        expect(calc.subtract(5, 3)).toEqual(2);
	    });
	});

	describe('should set flags appropriately while "=" is pressed ', function() {
		it("should reset to defaults on clear", function() {
		    spyOn(calc, "clearAll");
		    calc.clearAll();
		    expect(calc.result).toEqual(0);
		   	expect(calc.clearAll).toHaveBeenCalled();
		});

	});

	

});