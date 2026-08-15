import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
export function integer_factorization_to_sat_compress_columns(
  cnf,
  columns,
  fullAdderCSA,
  halfAdder,
) {
  arguments_assert(arguments, 4);
  function lambda6() {
    let r6 = [];
    return r6;
  }
  let next = Array.from(
    {
      length: add(columns.length, 1),
    },
    lambda6,
  );
  for (let i = 0; less_than(i, columns.length); i++) {
    let col = [...columns[i]];
    while (greater_than_equal(col.length, 3)) {
      let a = col.pop();
      let b = col.pop();
      let c = col.pop();
      let [s, carry] = fullAdderCSA(cnf, a, b, c);
      next[i].push(s);
      next[add(i, 1)].push(carry);
    }
    if (equal(col.length, 2)) {
      let [s, carry] = halfAdder(cnf, col[0], col[1]);
      next[i].push(s);
      next[add(i, 1)].push(carry);
    } else if (equal(col.length, 1)) {
      next[i].push(col[0]);
    }
  }
  return next;
}
