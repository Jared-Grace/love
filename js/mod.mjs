export function mod(quotient, divisor) {
  // True mathematical modulo: always non-negative for a positive divisor, so
  // negative quotients wrap (e.g. mod(-1, 9) === 8) instead of staying negative
  // like the raw % remainder. Identical to % for a non-negative quotient.
  let remainder = quotient % divisor;
  let wrapped = remainder + divisor;
  let m = wrapped % divisor;
  return m;
}
