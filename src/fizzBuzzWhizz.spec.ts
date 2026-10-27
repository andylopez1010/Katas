
import { game } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game", () => {
  test("returns 1 for 1", () => {
    expect(game(1)).toEqual(1);
  });

  test("returns Whizz for 2", () => {
    expect(game(2)).toEqual("Whizz");
  });

  test("returns FizzWhizz for 3", () => {
    expect(game(3)).toEqual("FizzWhizz");
  });

  test("returns Whizz for 5", () => {
    expect(game(5)).toEqual("BuzzWhizz");
  });

  test("returns Whizz for 7", () => {
    expect(game(7)).toEqual("Whizz");
  });

  test("returns Fizz for 6", () => {
    expect(game(6)).toEqual("Fizz");
  });

  test("returns Whizz for 11", () => {
    expect(game(11)).toEqual("Whizz");
  });

  test("returns Whizz for 13", () => {
    expect(game(13)).toEqual("Whizz");
  });

  test("returns FizzBuzz for 15", () => {
    expect(game(15)).toEqual("FizzBuzz");
  });

  test("returns Whizz for 17", () => {
    expect(game(17)).toEqual("Whizz");
  });

  test("returns Fizz for 18", () => {
    expect(game(18)).toEqual("Fizz");
  });

  test("returns Whizz for 19", () => {
    expect(game(19)).toEqual("Whizz");
  });

  test("returns Buzz for 20", () => {
    expect(game(20)).toEqual("Buzz");
  });

  test("returns Whizz for 23", () => {
    expect(game(23)).toEqual("Whizz");
  });

  test("returns Fizz for 24", () => {
    expect(game(24)).toEqual("Fizz");
  });

  test("returns Buzz for 25", () => {
    expect(game(25)).toEqual("Buzz");
  });

  test("returns Whizz for 29", () => {
    expect(game(29)).toEqual("Whizz");
  });

  test("returns FizzBuzz for 30", () => {
    expect(game(30)).toEqual("FizzBuzz");
  });

  test("returns Whizz for 31", () => {
    expect(game(31)).toEqual("Whizz");
  });

  test("returns Fizz for 33", () => {
    expect(game(33)).toEqual("Fizz");
  });

  test("returns Buzz for 35", () => {
    expect(game(35)).toEqual("Buzz");
  });

  test("returns Fizz for 36", () => {
    expect(game(36)).toEqual("Fizz");
  });

  test("returns Whizz for 37", () => {
    expect(game(37)).toEqual("Whizz");
  });

  test("returns Fizz for 39", () => {
    expect(game(39)).toEqual("Fizz");
  });

  test("returns Buzz for 40", () => {
    expect(game(40)).toEqual("Buzz");
  });

  test("returns Whizz for 43", () => {
    expect(game(43)).toEqual("Whizz");
  });

  test("returns Fizz for 42", () => {
    expect(game(42)).toEqual("Fizz");
  });

  test("returns Buzz for 45", () => {
    expect(game(45)).toEqual("FizzBuzz");
  });

  test("returns Fizz for 48", () => {
    expect(game(48)).toEqual("Fizz");
  });

  test("returns Buzz for 50", () => {
    expect(game(50)).toEqual("Buzz");
  });

  test("returns Fizz for 51", () => {
    expect(game(51)).toEqual("Fizz");
  });

  test("returns Whizz for 53", () => {
    expect(game(53)).toEqual("Whizz");
  });

  test("returns FizzBuzz for 60", () => {
    expect(game(60)).toEqual("FizzBuzz");
  });

  test("returns Fizz for 63", () => {
    expect(game(63)).toEqual("Fizz");
  });

  test("returns Buzz for 65", () => {
    expect(game(65)).toEqual("Buzz");
  });

  test("returns Fizz for 72", () => {
    expect(game(72)).toEqual("Fizz");
  });

  test("returns Whizz for 73", () => {
    expect(game(73)).toEqual("Whizz");
  });

  test("returns Buzz for 80", () => {
    expect(game(80)).toEqual("Buzz");
  });

  test("returns Fizz for 81", () => {
    expect(game(81)).toEqual("Fizz");
  });

  test("returns Fizz for 93", () => {
    expect(game(93)).toEqual("Fizz");
  });

  test("returns Buzz for 100", () => {
    expect(game(100)).toEqual("Buzz");
  });
});

