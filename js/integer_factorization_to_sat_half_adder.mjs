import { arguments_assert } from "./arguments_assert.mjs";
export function integer_factorization_to_sat_half_adder(
  cnf,
  a,
  b,
  xorGate,
  andGate,
) {
  arguments_assert(arguments, 5);
  let sum = xorGate(cnf, a, b);
  let carry = andGate(cnf, a, b);
  let r = [sum, carry];
  return r;
}
