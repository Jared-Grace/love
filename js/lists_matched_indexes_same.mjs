import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function lists_matched_indexes_same({
  size_before,
  table,
  Float64Array,
  size_after,
  cost_gap,
  before,
  after,
}) {
  arguments_assert(arguments, 1);
  for (let i = 0; less_than_equal(i, size_before); i++) {
    table.push(new Float64Array(size_after + 1));
    table[i][0] = multiply(i, cost_gap);
  }
  for (let j = 0; less_than_equal(j, size_after); j++) {
    table[0][j] = multiply(j, cost_gap);
  }
  for (let i = 1; less_than_equal(i, size_before); i++) {
    for (let j = 1; less_than_equal(j, size_after); j++) {
      let same = equal(before[subtract(i, 1)], after[subtract(j, 1)]) ? 1 : -1;
      let paired = table[subtract(i, 1)][subtract(j, 1)] + same;
      let skipped_before = table[subtract(i, 1)][j] + cost_gap;
      let skipped_after = table[i][subtract(j, 1)] + cost_gap;
      table[i][j] = Math.max(paired, skipped_before, skipped_after);
    }
  }
}
