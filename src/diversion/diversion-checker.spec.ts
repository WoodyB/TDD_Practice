import { diversionChecker } from './diversion-checker';

describe('Diversion Checker', () => {
  it('should return 0 for 0 binary digits', () => {
    expect(diversionChecker(0)).toEqual(0);
  });

  it('should return 2 for 1 binary digit', () => {
    expect(diversionChecker(1)).toEqual(2);
  });

  it('should return 3 for 2 binary digits', () => {
    expect(diversionChecker(2)).toEqual(3);
  });

  it('should return 8 for 3 binary digits', () => {
    expect(diversionChecker(4)).toEqual(8);
  });

  it('should return 13 for 5 binary digits', () => {
    expect(diversionChecker(5)).toEqual(13);
  });

  it('should return 55 for 8 binary digits', () => {
    expect(diversionChecker(8)).toEqual(55);
  });
});