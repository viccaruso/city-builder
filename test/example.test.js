// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { displayStats } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('displayStats should return a string with the correct count of changes made', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You changed the buildings 2 times, the waterfront 6 times, and the park 1 time. And everybody loves your city\'s slogans:';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayStats(2, 6, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});