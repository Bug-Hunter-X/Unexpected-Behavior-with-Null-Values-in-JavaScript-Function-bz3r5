# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a common error in JavaScript related to handling null values as function parameters.  The `foo` function does not correctly handle cases where `a` or `b` are `null`, leading to potential issues.

## Bug

The `bug.js` file contains the buggy function.  It returns 0 when either `a` or `b` is `null` without considering the data type or potential need for more sophisticated handling. 

## Solution

The `bugSolution.js` file provides a corrected version of the function that handles `null` values more robustly.  The solution includes explicit checks for `null` and potentially undefined values and defaults the parameter to 0 if it's null or undefined.