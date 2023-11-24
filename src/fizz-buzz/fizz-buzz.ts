export class FizzBuzz {
    public checkForFizzBuzz(num: number): string {
        let returnString = '';

        if (this.isFizz(num))  {
            returnString = 'Fizz';
        }

        if (this.isBuzz(num))  {
            returnString = returnString.concat('Buzz');
        }

        if (returnString === '') {
            returnString = num.toString();
        }
        
        return returnString;
    }

    private isFizz(num: number): boolean {
        return (num % 3 ===  0);
    }

    private isBuzz(num: number): boolean {
        return (num % 5 ===  0);
    }
}