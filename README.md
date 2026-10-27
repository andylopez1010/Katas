# FizzBuzzWhizz

## About the Project

FizzBuzzWhizz is a programming kata developed using TypeScript. The main goal of this project is to practice programming logic, conditional statements, loops, functions, and automated testing with Jest.

The program receives a natural number greater than zero and returns a result based on the rules of the game.

## Game Rules

The program checks the following conditions:

- **Fizz:** If the number is divisible by 3, the word `Fizz` is added to the result.
- **Buzz:** If the number is divisible by 5, the word `Buzz` is added to the result.
- **Whizz:** If the number is a prime number, the word `Whizz` is added to the result.
- **Original Number:** If none of the conditions apply, the program returns the original number.

When more than one condition is met, the corresponding words are combined in the following order: `Fizz`, `Buzz`, and `Whizz`.

## Examples

| Input | Output | Explanation |
|---:|---|---|
| 1 | `1` | No rule applies |
| 2 | `Whizz` | Prime number |
| 3 | `FizzWhizz` | Divisible by 3 and is prime |
| 4 | `4` | No rule applies |
| 5 | `BuzzWhizz` | Divisible by 5 and is prime |
| 6 | `Fizz` | Divisible by 3 |
| 7 | `Whizz` | Prime number |
| 9 | `Fizz` | Divisible by 3 |
| 10 | `Buzz` | Divisible by 5 |
| 15 | `FizzBuzz` | Divisible by 3 and 5 |
| 30 | `FizzBuzz` | Divisible by 3 and 5 |
| 45 | `FizzBuzz` | Divisible by 3 and 5 |
| 60 | `FizzBuzz` | Divisible by 3 and 5 |
| 100 | `Buzz` | Divisible by 5 |

## Technologies Used

- **TypeScript:** Programming language used to develop the game.
- **Node.js:** Runtime environment for executing JavaScript and TypeScript tools.
- **Jest:** Testing framework used to verify the program's behavior.
- **npm:** Package manager used to install dependencies and run scripts.

## Project Structure

```text
Katas-main/
├── src/
│   ├── fizzBuzzWhizz.ts
│   └── fizzBuzzWhizz.spec.ts
├── package.json
└── README.md
```

### Main Files

- **`fizzBuzzWhizz.ts`:** Contains the main `game()` function, which applies the game rules, and the `isPrime()` function, which checks whether a number is prime.
- **`fizzBuzzWhizz.spec.ts`:** Contains the automated tests written with Jest to check the expected results for different numbers.
- **`package.json`:** Contains project information, dependencies, and scripts.
- **`README.md`:** Documents the project, its rules, and how to run the tests.

## Installation

Make sure Node.js and npm are installed on your computer.

Open a terminal in the project directory and run:

```bash
npm install
```

This command installs the dependencies required by the project.

## Running the Tests

To execute the automated tests, run:

```bash
npm test
```

The test suite contains **41 test cases** that verify the behavior of the game for different inputs, including prime numbers and numbers divisible by 3 or 5.

## Implementation

The program uses conditional statements to check whether the input number is divisible by 3 or 5 and whether it is prime.

The `game()` function builds the result by adding the corresponding words in the required order. If no rule applies, it returns the original number.

The `isPrime()` function checks whether a number is prime. It returns `false` for numbers smaller than 2 and checks possible divisors up to the square root of the input number.

## What I Learned

While developing this project, I practiced:

- Using conditional statements in TypeScript.
- Combining multiple conditions in a single function.
- Checking whether a number is prime.
- Using loops to verify possible divisors.
- Creating functions and returning different types of values.
- Writing automated tests with Jest.
- Testing different cases to verify that a program works correctly.

This project helped me improve my programming logic and understand the importance of automated testing in software development.
