# fuzzyEquals

Compares two values, allowing for a variable amount of tolerance.

    import fuzzyEquals from 'parsegraph-fuzzyequals';

    let iters = 0;
    let delta = 1;
    const a = 1;
    let isFuzzyEqual = false;
    while(a !== a + delta) {
      iters++;
      const b = a + delta;
      if (!isFuzzyEqual && fuzzyEquals(a, b)) {
        console.log(`Iteration ${iters}. delta=${delta}`);
        console.log(`fuzzyEquals(${a}, ${b})=${fuzzyEquals(a, b)}`);
        isFuzzyEqual = true;
      }
      delta = delta / 2;
    }
    console.log(`Iteration ${iters}. delta=${delta}`);
    console.log(`${a} === ${a + delta}: ${a === a + delta}`);

Output:

    Iteration 21. delta=9.5367431640625e-7
    fuzzyEquals(1, 1.0000009536743164)=true
    Iteration 53. delta=1.1102230246251565e-16
    1 === 1: true
