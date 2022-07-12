export function expressionCalculator(expr: string): string | void {
  const exprWithoutSpaces = expr.replace(/ /g, '');

  const operations = exprWithoutSpaces.match(/[-+/*%]/g);
  if (!operations) return;

  const illegalChars = exprWithoutSpaces.match(/[^(0-9-+/*%).]/g);
  if (illegalChars) throw new Error('Invalid input');

  if (exprWithoutSpaces.indexOf('/0') !== -1) throw new Error('Division by zero');

  const areParenthesesValid = validateParentheses(exprWithoutSpaces);
  if (!areParenthesesValid) throw new Error('Brackets must be paired');

  let result = null;

  try {
    const generator = new Function('return ' + exprWithoutSpaces);
    result = Number(generator().toFixed(3)).toString();
  } catch {
    throw new Error('Invalid input');
  }
  return result;
}

function validateParentheses(expr: string): boolean {
  let n = 0;
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '(') n++;
    if (expr[i] === ')') n--;
    if (n < 0) return false;
  }
  return n === 0;
}
