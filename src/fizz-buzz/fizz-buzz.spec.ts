import { checkForFizzBuzz, Iterator } from './fizz-buzz';

describe('FizzBuzz', () => {
 
  it('should just return number in string form if not multiple of 3 or 5', () => {
    expect(checkForFizzBuzz(1)).toEqual('1');
  });
  it('should return Fizz if number is a multiple of 3 (num = 3)', () => {
    expect(checkForFizzBuzz(3)).toEqual('Fizz');
  });
  it('should return Fizz if number is a multiple of 3 (num = 6)', () => {
    expect(checkForFizzBuzz(6)).toEqual('Fizz');
  });

  it('should return Buzz if number is a multiple of 5 (num = 5)', () => {
    expect(checkForFizzBuzz(5)).toEqual('Buzz');
  });

  it('should return Buzz if number is a multiple of 5 (num = 10)', () => {
    expect(checkForFizzBuzz(10)).toEqual('Buzz');
  });

  it('should return Fizz Buzz if number is a multiple of 3 and 5 (num = 15)', () => {
    expect(checkForFizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('should return Fizz Buzz if number is a multiple of 3 and 5 (num = 30)', () => {
    expect(checkForFizzBuzz(30)).toEqual('FizzBuzz');
  });
});

describe('Iterator', () => {
    let displayCallCount: number;
    let lastStringDisplayed: string;

    const iterator = new Iterator(myDisplay, myRenderer);
    it('should call display 2 times when we call iterate(2)', () => {
        displayCallCount = 0;
        iterator.iterate(2);
        expect(displayCallCount).toEqual(2);
    });

    it('should display each rendered number', () => {
        lastStringDisplayed = '';
        iterator.iterate(2);
        expect(lastStringDisplayed).toBe('>> 2');
    });


    function myDisplay(str: string) {
        displayCallCount += 1;
        lastStringDisplayed = str;
    }
    
    function myRenderer(num: number) {
        return `>> ${num.toString()}`;
    }     
});

// describe('Delete Me: Proof', () => {
//     const iterator = new Iterator(console.log, checkForFizzBuzz);

//      iterator.iterate(100);
// });

