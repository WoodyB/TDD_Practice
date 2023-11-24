import { FizzBuzz } from './fizz-buzz';

describe('FizzBuzz', () => {
  const fizzBuzz = new FizzBuzz();
 
  it('should just return number in string form if not multiple of 3 or 5', () => {
    expect(fizzBuzz.checkForFizzBuzz(1)).toEqual('1');
  });
  it('should return Fizz if number is a multiple of 3 (num = 3)', () => {
    expect(fizzBuzz.checkForFizzBuzz(3)).toEqual('Fizz');
  });
  it('should return Fizz if number is a multiple of 3 (num = 6)', () => {
    expect(fizzBuzz.checkForFizzBuzz(6)).toEqual('Fizz');
  });

  it('should return Buzz if number is a multiple of 5 (num = 5)', () => {
    expect(fizzBuzz.checkForFizzBuzz(5)).toEqual('Buzz');
  });

  it('should return Buzz if number is a multiple of 5 (num = 10)', () => {
    expect(fizzBuzz.checkForFizzBuzz(10)).toEqual('Buzz');
  });

  it('should return Fizz Buzz if number is a multiple of 3 and 5 (num = 15)', () => {
    expect(fizzBuzz.checkForFizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('should return Fizz Buzz if number is a multiple of 3 and 5 (num = 30)', () => {
    expect(fizzBuzz.checkForFizzBuzz(30)).toEqual('FizzBuzz');
  });



});