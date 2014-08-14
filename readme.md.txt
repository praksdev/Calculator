For the Simple Calculator here,

I am using the eval() to calculate the result.However i have also added methods for all the operations to maintain the robustness of each of the calculations. This section is commented out for your reference.

The calculator handles cases where
1) a number can start with a negative sign
2) No two operators can be pressed successively along with the standard functionality support of evaluating an expression for its results.
3) Clears the expression on pressing "C"
4) Works on Chrome, Firefox, IE 8+ , safari

Also, I have added behavioral tests for the calculator using Jasmine Testing framework.  The tests can be run as a standalone from SpecRunner.html with jasmine-standalone-2.0.1 folder.
