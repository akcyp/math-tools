export function sieveOfAtkin (limit: number) {
  const limitSqrt = Math.sqrt(limit);
  const sieve = [];
  let n, x;

  sieve[2] = true;
  sieve[3] = true;

  for (x = 1; x <= limitSqrt; x++) {
    const xx = x * x;
    for (let y = 1; y <= limitSqrt; y++) {
      const yy = y * y;
      if (xx + yy >= limit) {
        break;
      }
      n = (4 * xx) + (yy);
      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }

      n = (3 * xx) + (yy);
      if (n <= limit && (n % 12 === 7)) {
        sieve[n] = !sieve[n];
      }

      n = (3 * xx) - (yy);
      if (x > y && n <= limit && (n % 12 === 11)) {
        sieve[n] = !sieve[n];
      }
    }
  }
  for (n = 5; n <= limitSqrt; n++) {
    if (sieve[n]) {
      x = n * n;
      for (let i = x; i <= limit; i += x) {
        sieve[i] = false;
      }
    }
  }
  return sieve;
}

export function getPrimes (val: number) {
  val = Math.abs(val);
  const ret: number[] = [];
  sieveOfAtkin(val).forEach((val, i) => {
    if (val === true) {
      ret.push(i);
    }
  });
  return ret;
}

export function getPrimeFactors (val: number) {
  val = Math.abs(val);
  const factors = [];
  const primes = getPrimes(val);
  while (true) {
    if (Math.abs(val) <= 1) {
      return factors;
    }
    for (const prime of primes) {
      if (val % prime === 0) {
        factors[factors.length] = prime;
        val /= prime;
        break;
      }
    }
  }
}

export function convertNumber (inSystem: number, outSystem: number, number: string) {
  return parseInt(number, inSystem).toString(outSystem);
};

export * from './romanConvertor';
