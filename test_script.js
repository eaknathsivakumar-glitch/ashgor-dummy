import { addNumbers } from './add_numbers.js';
import fs from 'fs';

// Test cases
const testCases = [
  { a: 5, b: 3, expected: 8 },
  { a: 10, b: 20, expected: 30 },
  { a: -5, b: 5, expected: 0 },
  { a: 100, b: 200, expected: 300 },
  { a: 0, b: 0, expected: 0 }
];

// Run tests and store results
let results = [];
testCases.forEach((test, index) => {
  const result = addNumbers(test.a, test.b);
  const passed = result === test.expected;
  results.push(`Test ${index + 1}: ${test.a} + ${test.b} = ${result} (Expected: ${test.expected}) - ${passed ? 'PASSED' : 'FAILED'}`);
});

// Write results to output file
fs.writeFileSync('test_output.txt', results.join('\n'));
console.log('Tests completed. Results written to test_output.txt');
