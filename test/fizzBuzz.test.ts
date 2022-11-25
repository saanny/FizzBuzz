import { fizzBuzz } from "../src/FizzBuzz";

describe('FizzBuzz Tests', () => {
    it('should return 1 when sending 1', () => {
        expect(fizzBuzz(1)).toBe("1");
    });
    it('should return 2 when sending 2', () => {
        expect(fizzBuzz(2)).toBe("2");
    });
    it('should return 4 when sending 4', () => {
        expect(fizzBuzz(4)).toBe("4");
    });
    it('should return Fizz when sending 3', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    it('should return Fizz when sending 6', () => {
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    it('should return Fizz when sending 9', () => {
        expect(fizzBuzz(9)).toBe("Fizz");
    });
    it('should return Buzz when sending 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
    it('should return Buzz when sending 10', () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    it('should return Buzz when sending 20', () => {
        expect(fizzBuzz(20)).toBe("Buzz");
    });
    it('should return FizzBuzz when sending 15', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it('should return FizzBuzz when sending 30', () => {
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    });
    it('should return FizzBuzz when sending 45', () => {
        expect(fizzBuzz(45)).toBe("FizzBuzz");
    });
});
