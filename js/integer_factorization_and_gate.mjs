import { arguments_assert } from "./arguments_assert.mjs";
export function integer_factorization_and_gate(cnf, a, b) {
  arguments_assert(arguments, 3);
  let z = cnf.newVar();
  cnf.addClause(-a, -b, z);
  cnf.addClause(a, -z);
  cnf.addClause(b, -z);
  return z;
}
