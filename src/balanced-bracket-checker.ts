export class BalancedBracketChecker {  
    public isBalanced(str: string): boolean {
        const bracketStack: string[] = [];
        let result = false;
        
        const processStringSuccess = this.processString(str, bracketStack);

        if (this.isBracketStackEmpty(bracketStack) && processStringSuccess) {
            result = true;
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

    private isClosingBraceWithoutOpeningBrace(char: string, bracketStack: string[]): boolean {
        if (this.isClosingBrace(char) && this.isBracketStackEmpty(bracketStack)) {
            return true;
        }
        return false;
    }

    private isBracketStackEmpty(bracketStack: string[]): boolean {
        if (bracketStack.length === 0) {
            return true;
        }
        return false; 
    }

    private isClosingBraceAMatchForOpeningBrace(char: string, bracketStack: string[]): boolean {
        if (!this.isClosingBrace(char)) {
            return false;
        }
        if (char === ']' && bracketStack[bracketStack.length - 1] !== '[') {
            return false;
        }
        if (char === '}' && bracketStack[bracketStack.length - 1] !== '{') {
            return false;
        }
        if (char === ')' && bracketStack[bracketStack.length - 1] !== '(') {
            return false;
        }

        return true;
    }

    private processString(str: string, bracketStack: string[]): boolean {
        let success = true;

        for (const char of str) {
            if (this.isOpeningBrace(char)) {
                bracketStack.push(char);
            }

            if (this.isClosingBraceWithoutOpeningBrace(char, bracketStack)) {
                success = false;
                break;
            }            

            if (this.isClosingBrace(char)) {
                const isClosingBraceAMatchForOpeningBrace = this.isClosingBraceAMatchForOpeningBrace(char, bracketStack);
                if (!isClosingBraceAMatchForOpeningBrace) {
                    success = false;
                    break;
                }
                bracketStack.pop();
            }
        }
        return success;       
    }
}
  