import {Luhn} from './luhn';

test('Test the card number should be success.', () => {
  const result = Luhn.validate(4895048712071025);
  expect(result).toBe(true)
});

test('Test the card number should be fail', () => {
  const result = Luhn.validate(4895048712071026);
  expect(result).toBe(false)
});