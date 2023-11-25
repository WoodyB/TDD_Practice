export function checkForFizzBuzz(num: number): string {
    let returnString = '';

    if (num % 3 ===  0)  {
        returnString = 'Fizz';
    }

    if (num % 5 ===  0)  {
        returnString = returnString.concat('Buzz');
    }

    if (returnString === '') {
        returnString = num.toString();
    }
    
    return returnString;
}


export class Iterator {
    constructor(private display: (str: string) => void,
        private renderer: (num: number) => string) {
    }

    public iterate(count: number): void {
        for (let i = 1; i <= count; i++) {
            this.display(this.renderer(i));
        }
    }
}
