import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { and } from "./and.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
export function app_replace_rule_set_proof_show_in_run(j, run_start, size) {
  arguments_assert(arguments, 3);
  let run_end = add(run_start, size);
  let left = greater_than_equal(j, run_start);
  let right = less_than(j, run_end);
  let ans = and(left, right);
  return ans;
}
