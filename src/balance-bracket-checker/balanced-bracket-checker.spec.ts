import { BalancedBracketChecker } from './balanced-bracket-checker';

describe('BalanceBracketChecker', () => {
  const balancedBracketChecker = new BalancedBracketChecker();
 
  it('should return true on empty string', () => {
    expect(balancedBracketChecker.isBalanced('')).toEqual(true);
  });
  
  it("should return true if string does't contain any brackets", () => {
    expect(balancedBracketChecker.isBalanced('This is a string with no brackets')).toEqual(true);
  });
  
  it('should return true if string contains a opening left [ and a closing ]', () => {
    expect(balancedBracketChecker.isBalanced('[]')).toEqual(true);
  });
 
  it('should return true if string contains a opening left ( and a closing )', () => {
    expect(balancedBracketChecker.isBalanced('()')).toEqual(true);
  });
 
  it('should return false if string contains a left [ without a closing ]', () => {
    expect(balancedBracketChecker.isBalanced('[')).toEqual(false);
  });
  
  it('should return false if string contains a left ( without a closing )', () => {
    expect(balancedBracketChecker.isBalanced('(')).toEqual(false);
  });

  it('should return false if string contains a right closing ] followed by an left opening ]', () => {
    expect(balancedBracketChecker.isBalanced('][')).toEqual(false);
  });

  it('should return false if string contains two left opening [[ and only one closing ]', () => {
    expect(balancedBracketChecker.isBalanced('[This is just text [This is some more text]')).toEqual(false);
  });
  
  it('should return false if string contains one left opening [ and two closing ]]', () => {
    expect(balancedBracketChecker.isBalanced('[This is just text] This is some more text]')).toEqual(false);
  });  

  it('should return true if string contains mixed balanced braces', () => {
    expect(balancedBracketChecker.isBalanced('[{This is just text} {This some more text}]')).toEqual(true);
  });  

  it('should return false if string contains mixed unbalanced braces, missing closing }', () => {
    expect(balancedBracketChecker.isBalanced('[{This is just text} {This some more text]')).toEqual(false);
  });

  it('should return false if string contains mixed unbalanced braces, missing opening {', () => {
    expect(balancedBracketChecker.isBalanced('[This is just text} {This some more text}]')).toEqual(false);
  });

  it('should return false if string contains wrong order of braces', () => {
    expect(balancedBracketChecker.isBalanced('[{(})]')).toEqual(false);
  });
  
  // Examples from exercise
  it('should return false if string has mixed braces with wrong order of {{)(}} ', () => {
    expect(balancedBracketChecker.isBalanced('{{)(}}')).toEqual(false);
  });

  it('should return false if string has mixed braces with wrong order of ({)} ', () => {
    expect(balancedBracketChecker.isBalanced('({)}')).toEqual(false);
  });

  it('should return true for mixed balanced braces of [({})]', () => {
    expect(balancedBracketChecker.isBalanced('[({})]')).toEqual(true);
  });

  it('should return true for mixed balanced braces of [({})]', () => {
    expect(balancedBracketChecker.isBalanced('[({})]')).toEqual(true);
  });

  it('should return true for mixed balanced braces of {()}[[{}]]', () => {
    expect(balancedBracketChecker.isBalanced('{()}[[{}]]')).toEqual(true);
  });

  // Adding < > as brackets
  it('should return true if string contains a opening left < and a closing >', () => {
    expect(balancedBracketChecker.isBalanced('<>')).toEqual(true);
  });
  it('should return false if string contains a opening left < and no closing >', () => {
    expect(balancedBracketChecker.isBalanced('<')).toEqual(false);
  });
});
