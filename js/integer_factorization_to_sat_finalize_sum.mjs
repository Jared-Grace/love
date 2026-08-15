import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function integer_factorization_to_sat_finalize_sum(
  cnf,
  columns,
  halfAdder,
  fullAdder,
) {
  arguments_assert(arguments, 4);
  let result = [];
  let carry = null;
  for (let i = 0; less_than(i, columns.length); i++) {
    let col = columns[i];
    let a = col[0] || null;
    let b = col[1] || null;
    if (a && b) {
      if (equal(carry, null)) {
        [result[i], carry] = halfAdder(cnf, a, b);
      } else {
        [result[i], carry] = fullAdder(cnf, a, b, carry);
      }
    } else if (a) {
      if (equal(carry, null)) {
        result[i] = a;
      } else {
        [result[i], carry] = halfAdder(cnf, a, carry);
      }
    } else if (b) {
      if (equal(carry, null)) {
        result[i] = b;
      } else {
        [result[i], carry] = halfAdder(cnf, b, carry);
      }
    } else {
      if (equal(carry, null)) {
        result[i] = null;
      } else {
        result[i] = carry;
        carry = null;
      }
    }
  }
  return result;
}
