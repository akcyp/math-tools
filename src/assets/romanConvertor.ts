interface Dictionary<T> {
  [K: string]: T;
}

export const digitsMapper: Dictionary<number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

export function toRoman(value: number) {
  if (value <= 0) return '';
  const letters = Object.keys(digitsMapper);
  return Object.values(digitsMapper).filter(v => Math.log10(v) % 1 === 0).reverse().map(v => {
    const x = Math.floor(value / v);
    value -= x * v;
    return x;
  }).map((dv, i) => {
    i = letters.length - 1 - i * 2;
    if (i === letters.length - 1 || dv < 4) return letters[i].repeat(dv);
    if (dv === 9) return letters[i] + letters[i + 2];
    if (dv === 4) return letters[i] + letters[i + 1];
    return letters[i + 1] + letters[i].repeat(dv - 5);
  }).join('');
}

export function fromRoman(value: string) {
  value = value.toUpperCase();
  const letters = Object.keys(digitsMapper);
  const max = digitsMapper[letters[letters.length - 1]];
  const arr = value.split('').map(v => digitsMapper[v]);
  let ret = 0;
  let last, sameInRow = 0, lastRet = 0;
  for (let i = 0; i < arr.length; i++) {
    const now = arr[i];
    const next = arr[i + 1] || 0;
    const back = arr[i - 1] || Infinity;
    const x = ((now <= back && now < next) ? -1 : 1) * now;
    ret += x;
    // Validation
    if (last === now) {
      sameInRow++;
      if (sameInRow > 2 && last !== max) {
        return NaN;
      }
    } else {
      last = now;
      sameInRow = 0;
    }
    if (x < 0 && lastRet < 0) {
      return NaN;
    }
    lastRet = x;
  }
  return ret;
}
