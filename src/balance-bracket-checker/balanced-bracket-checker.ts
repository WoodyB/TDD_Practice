type BracePair = {
    openingBrace: string;
    closingBrace: string;
}

export class BalancedBracketChecker {
    
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
        const bracketStack: string[] = [];
        let openingBrace: string | undefined;
        let result = true;
        
        for (const char of str) {
            this.pushOnStackIfOpeningBrace(char, bracketStack);

            openingBrace = this.popStackIfClosingBrace(char, bracketStack);            
                
            if (!this.doesClosingBraceMatcheOpeningBrace(openingBrace, char)){
                result = false;
                break;
            }
        }

        if (!this.isBracketStackEmpty(bracketStack)) {
            result = false;
        } 
    
        return result;
    }

    private doesClosingBraceMatcheOpeningBrace(openingBrace: string | undefined, char: string): boolean {
        if (this.isClosingBrace(char)) { 
            return this.isClosingBraceAMatchForOpeningBrace(openingBrace, char);
        }                
        return true;
    }

    private popStackIfClosingBrace(char: string, bracketStack: string[]) {
        let openingBrace: string | undefined = undefined;
        
        if (this.isClosingBrace(char)) {
            openingBrace = bracketStack.pop();                
        }

        return openingBrace;
    }

    private pushOnStackIfOpeningBrace(char: string, bracketStack: string[]) {
        if (this.isOpeningBrace(char)) {
            bracketStack.push(char);
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

    private isBracketStackEmpty(bracketStack: string[]): boolean {
        if (bracketStack.length === 0) {
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
  