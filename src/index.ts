// eslint-disable-next-line require-jsdoc
export default function fuzzyEquals(a, b, fuzziness) {
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
