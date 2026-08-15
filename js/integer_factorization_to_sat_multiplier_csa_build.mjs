import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine } from "./text_combine.mjs";
import { greater_than } from "./greater_than.mjs";
export function integer_factorization_to_sat_multiplier_csa_build(
  cnf,
  x,
  y,
  andGate,
  compressColumns,
) {
  arguments_assert(arguments, 5);
  let bits = x.length;
  function lambda7() {
    let r = [];
    return r;
  }
  let columns = Array.from(
    {
      length: multiply(2, bits),
    },
    lambda7,
  );
  for (let i = 0; less_than(i, bits); i++) {
    for (let j = 0; less_than(j, bits); j++) {
      let p = andGate(cnf, x[i], y[j]);
      columns[text_combine(i, j)].push(p);
    }
  }
  function lambda8(col) {
    let r8 = greater_than(col.length, 2);
    return r8;
  }
  while (columns.some(lambda8)) {
    columns = compressColumns(cnf, columns);
  }
  return columns;
}
