import { expressionCalculator } from '../../src/utils/calculator';

describe('Unit test our math functions', () => {
  context('this should be ok as it is', () => {
    it('can add numbers', () => {
      expect(expressionCalculator('1 + 2')).to.eq('3');
    });

    it('can subtract numbers', () => {
      expect(expressionCalculator('1 - 3')).to.eq('-2');
    });

    it('can divide numbers', () => {
      expect(expressionCalculator('27 / 9')).to.eq('3');
    });

    it('can multiply numbers', () => {
      expect(expressionCalculator('5 * 4')).to.eq('20');
    });

    it('can deal with simple parenthesis', () => {
      expect(expressionCalculator('29 + (34 - 20)')).to.eq('43');
    });

    it('can deal with nested parenthesis', () => {
      expect(expressionCalculator('29 + (34 - (20 + 4))')).to.eq('39');
    });

    it('can deal with remainder', () => {
      expect(expressionCalculator('-13 % 5')).to.eq('-3');
    });
  });
});
