export class Luhn {
  /**
  * @description Validatator of Credit Card Numbers
  * @param cc Credit Card Numbers
  * @returns Validation result of Credit Card Nunbers that are valid or not
  */
  public static validate(cc: any): boolean {
    // Change to number object
    cc = Array.from(String(cc), Number);
    // Luhn Alogorithom
    let sum = 0;
    for (let i = 0; i <= cc.length - 1; i++) {
      let digit: number = cc[i];
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }
}
