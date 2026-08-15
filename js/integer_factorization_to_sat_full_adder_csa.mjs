import { arguments_assert } from "./arguments_assert.mjs";
export function integer_factorization_to_sat_full_adder_csa(
  cnf,
  a,
  b,
  c,
  xorGate,
  andGate,
) {
  arguments_assert(arguments, 6);
  let v = xorGate(cnf, a, b);
  let s = xorGate(cnf, v, c);
  let ab = andGate(cnf, a, b);
  let ac = andGate(cnf, a, c);
  let bc = andGate(cnf, b, c);
  let carry = cnf.newVar();
  cnf.addClause(-ab, carry);
  cnf.addClause(-ac, carry);
  cnf.addClause(-bc, carry);
  cnf.addClause(-carry, ab, ac, bc);
  let r = [s, carry];
  return r;
}
