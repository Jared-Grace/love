import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_chain_flat_ceiling } from "./functions_work_chain_flat_ceiling.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function functions_work_chain_excuse(chain) {
  arguments_assert(arguments, 1);
  ("The word for why a chain this shallow excuses a function from the size ceiling, or nothing when it does not.");
  ("It is handed the depth rather than the name so that whoever has already measured a function does not pay to measure it twice, and so the rule itself can be read without a file to read it from.");
  let flat_ceiling = functions_work_chain_flat_ceiling();
  let flat_is = less_than_equal(chain, flat_ceiling);
  if (flat_is) {
    let r = "flat";
    return r;
  }
  return null;
}
