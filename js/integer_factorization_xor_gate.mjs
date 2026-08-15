import { arguments_assert } from "./arguments_assert.mjs";
export function integer_factorization_xor_gate(cnf, a, b) {
  arguments_assert(arguments, 3);
  let z = cnf.newVar();
  cnf.addClause(-a, -b, -z);
  cnf.addClause(a, b, -z);
  cnf.addClause(a, -b, z);
  cnf.addClause(-a, b, z);
  return z;
}
