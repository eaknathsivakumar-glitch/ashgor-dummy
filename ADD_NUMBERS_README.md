# Add Numbers Function

## Overview
This module provides a simple function to add two numbers together.

## Files Included

### 1. `add_numbers.js`
The main module containing the `addNumbers` function.

**Function Signature:**
```javascript
addNumbers(a, b) -> number
```

**Parameters:**
- `a` (number): The first number to add
- `b` (number): The second number to add

**Returns:**
- (number): The sum of a and b

**Example Usage:**
```javascript
const addNumbers = require('./add_numbers.js');
console.log(addNumbers(5, 3)); // Output: 8
```

### 2. `test_script.js`
A test script that validates the `addNumbers` function with multiple test cases.

**Test Cases:**
- 5 + 3 = 8
- 10 + 20 = 30
- -5 + 5 = 0
- 100 + 200 = 300
- 0 + 0 = 0

**Running Tests:**
```bash
node test_script.js
```

### 3. `test_output.txt`
Output file that stores the results of the test execution.

### 4. `test_results_comparison.txt`
File used to compare and validate test results against expected outcomes.

## How to Use

1. **Run the test script:**
   ```bash
   node test_script.js
   ```

2. **Check the output:**
   ```bash
   cat test_output.txt
   ```

3. **Compare results:**
   ```bash
   cat test_results_comparison.txt
   ```

## Implementation Details

The `addNumbers` function is a simple utility that:
- Takes two numeric parameters
- Returns their sum
- Supports positive, negative, and zero values
- Works with integers and floating-point numbers

## Testing

The test script includes 5 test cases covering:
- Positive numbers
- Large numbers
- Negative numbers
- Zero values
- Mixed positive and negative numbers

All tests validate that the function returns the expected sum.
