import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function integer_factorization_to_sat_factorization_cnf(
  N,
  bits,
  CNF,
  buildMultiplierCSA,
  finalizeSum,
) {
  arguments_assert(arguments, 5);
  let cnf = new CNF();
  function lambda9() {
    let r9 = cnf.newVar();
    return r9;
  }
  let x = Array.from(
    {
      length: bits,
    },
    lambda9,
  );
  function lambda10() {
    let r10 = cnf.newVar();
    return r10;
  }
  let y = Array.from(
    {
      length: bits,
    },
    lambda10,
  );
  cnf.addClause(...x);
  cnf.addClause(...y);
  if (greater_than(bits, 1)) {
    cnf.addClause(...x.slice(1));
    cnf.addClause(...y.slice(1));
  }
  cnf.addClause(-x[subtract(bits, 1)], y[subtract(bits, 1)]);
  let columns = buildMultiplierCSA(cnf, x, y);
  let result = finalizeSum(cnf, columns);
  for (let i = 0; less_than(i, result.length); i++) {
    let bit = (N >> i) & 1;
    if (not_equal(result[i], null)) {
      cnf.addClause(bit ? result[i] : -result[i]);
    }
  }
  return cnf;
}
