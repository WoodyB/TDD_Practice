export class BalancedBracketChecker { 
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
            if (this.isOpeningBrace(char)) {
                bracketStack.push(char);
            }

            if (this.isClosingBrace(char)) {
                openingBrace = bracketStack.pop();
                if (!this.isClosingBraceAMatchForOpeningBrace(openingBrace, char)) {
                    result = false;
                    break;
                }
            }      
        }

        if (!this.isBracketStackEmpty(bracketStack)) {
            result = false;
        } 
    
        return result;
    }

    private isOpeningBrace(char: string): boolean {
        const openingBracesRegEx = /[[{(]/g;

        return openingBracesRegEx.test(char);
    }

    private isClosingBrace(char: string): boolean {
        const closingBracesRegEx = /[\]})]/g;

        return closingBracesRegEx.test(char);
    }

    private isBracketStackEmpty(bracketStack: string[]): boolean {
        if (bracketStack.length === 0) {
            return true;
        }
        return false; 
    }

    private isClosingBraceAMatchForOpeningBrace(openingBrace: string | undefined, closingBrace: string): boolean {
        if (!this.isClosingBrace(closingBrace)) {
            return false;
        }
        if (openingBrace === undefined) {
            return false;
        }
        if (closingBrace === ']' && openingBrace !== '[') {
            return false;
        }
        if (closingBrace === '}' && openingBrace !== '{') {
            return false;
        }
        if (closingBrace === ')' && openingBrace !== '(') {
            return false;
        }

        return true;
    }
}
  