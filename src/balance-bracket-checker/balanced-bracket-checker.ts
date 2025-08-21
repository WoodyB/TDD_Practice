type BracePair = {
    openingBrace: string;
    closingBrace: string;
}

export class BalancedBracketChecker {
    private bracketStack: string[] = [];
    private bracePairs: BracePair[] = [
        {openingBrace: '{', closingBrace: '}'},
        {openingBrace: '[', closingBrace: ']'},
        {openingBrace: '(', closingBrace: ')'},
        {openingBrace: '<', closingBrace: '>'}
    ];

    /**
     * 
     * @param str The string to be checked for balance brackets (all brackets [] {} and () have 
     * an opening bracket and closing bracket in the correct order and sequence)
     * @returns true if the brackets are balanced or if the string contains no brackets
     */
    public isBalanced(str: string): boolean {
        let openingBrace: string | undefined;
        let result = true;
        this.bracketStack = [];

        for (const char of str) {
            this.pushOnStackIfOpeningBrace(char);

            openingBrace = this.popStackIfClosingBrace(char);

            if (!this.doesClosingBraceMatchedOpeningBrace(openingBrace, char)){
                result = false;
                break;
            }
        }

        if (!this.isBracketStackEmpty()) {
            result = false;
        } 
    
        return result;
    }

    private doesClosingBraceMatchedOpeningBrace(openingBrace: string | undefined, char: string): boolean {
        if (this.isClosingBrace(char)) { 
            return this.isClosingBraceAMatchForOpeningBrace(openingBrace, char);
        }                
        return true;
    }

    private popStackIfClosingBrace(char: string) {
        let openingBrace: string | undefined = undefined;
        
        if (this.isClosingBrace(char)) {
            openingBrace = this.bracketStack.pop();                
        }

        return openingBrace;
    }

    private pushOnStackIfOpeningBrace(char: string) {
        if (this.isOpeningBrace(char)) {
            this.bracketStack.push(char);
        }
    }

    private isOpeningBrace(char: string): boolean {
        for (const validBracePair of this.bracePairs) {
            if (char === validBracePair.openingBrace) {
                return true;
            }
        }
        return false;
    }

    private isClosingBrace(char: string): boolean {
        for (const validBracePair of this.bracePairs) {
            if (char === validBracePair.closingBrace) {
                return true;
            }
        }
        return false;
    }

    private isBracketStackEmpty(): boolean {
        if (this.bracketStack.length === 0) {
            return true;
        }
        return false; 
    }

    private isClosingBraceAMatchForOpeningBrace(openingBrace: string | undefined, closingBrace: string): boolean {        
        if (openingBrace === undefined) {
            return false;
        }

        for (const validBracePair of this.bracePairs) {
            if (closingBrace === validBracePair.closingBrace && openingBrace !== validBracePair.openingBrace) {
                return false;
            }
        }        
        return true;
    }
}
  