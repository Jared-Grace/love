import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export function integer_factorization_to_sat_three_sat(cnf, CNF) {
  arguments_assert(arguments, 2);
  let out = new CNF();
  out.varCount = cnf.varCount;
  for (let clause of cnf.clauses) {
    if (less_than_equal(clause.length, 3)) {
      out.clauses.push(clause);
    } else {
      let prev = clause[0];
      let b = subtract(clause.length, 2);
      for (let i = 1; less_than(i, b); i++) {
        let v = out.newVar();
        out.addClause(prev, clause[i], v);
        prev = -v;
      }
      out.addClause(
        prev,
        clause[subtract(clause.length, 2)],
        clause[subtract(clause.length, 1)],
      );
    }
  }
  return out;
}
