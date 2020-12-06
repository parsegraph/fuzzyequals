export class Fuzziness {
  _fuzziness:number;

  constructor(value) {
    this.setFuzziness(value);
  }

  setFuzziness(value) {
    this._fuzziness = value;
  }

  getFuzziness() {
    return this._fuzziness !== undefined ?
      this._fuzziness : defaultFuzziness.getFuzziness();
  }

  resetFuzziness() {
    this.setFuzziness(undefined);
  }

  check(a, b) {
    const fuzziness = this.getFuzziness();
    if (!fuzziness) {
      return (isNaN(a) && isNaN(b)) || a === b;
    }
    if (a < b) {
      return Math.abs(b / a) - 1 <= fuzziness;
    }
    if (Math.abs(b) <= fuzziness) {
      return a - b <= fuzziness;
    }
    return Math.abs(a / b) - 1 <= fuzziness;
  }
}

const defaultFuzziness = new Fuzziness(1e-6);
export function setFuzziness(value) {
  defaultFuzziness.setFuzziness(value);
}

export function getFuzziness() {
  return defaultFuzziness.getFuzziness();
}

export function cloneFuzziness() {
  return new Fuzziness(defaultFuzziness.getFuzziness());
}

// eslint-disable-next-line require-jsdoc
export default function fuzzyEquals(a, b, fuzziness) {
  let calc = defaultFuzziness;
  if (fuzziness !== undefined) {
    calc = new Fuzziness(fuzziness);
  }
  return calc.check(a, b);
}
