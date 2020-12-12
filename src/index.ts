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
      return a === b;
    }
    return Math.abs(Math.abs(a) - Math.abs(b)) < fuzziness;
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
