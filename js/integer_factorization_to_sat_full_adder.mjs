import { arguments_assert } from "./arguments_assert.mjs";
export function integer_factorization_to_sat_full_adder(
  cnf,
  a,
  b,
  cin,
  xorGate,
  andGate,
) {
  arguments_assert(arguments, 6);
  let s = xorGate(cnf, a, b);
  let sum = xorGate(cnf, s, cin);
  let c = andGate(cnf, a, b);
  let c2 = andGate(cnf, a, cin);
  let c3 = andGate(cnf, b, cin);
  let cout = cnf.newVar();
  cnf.addClause(-c, cout);
  cnf.addClause(-c2, cout);
  cnf.addClause(-c3, cout);
  cnf.addClause(-cout, c, c2, c3);
  let r = [sum, cout];
  return r;
}
