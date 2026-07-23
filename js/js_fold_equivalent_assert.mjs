import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_canonical } from "./js_block_canonical.mjs";
import { list_slice } from "./list_slice.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export function js_fold_equivalent_assert(
  pattern_sigs,
  params,
  return_local,
  target_sigs,
  arg_keys,
  output_name,
  start,
  k,
) {
  "Gate 2: verify the fold preserved behavior, independently of how the matcher bound it. Canonicalize";
  "x's body (params as inputs, its return as output) and the matched block of F (the call args as";
  "inputs, F's output as output); the two alpha-canonical forms must be identical. If they differ the";
  "matched block is NOT x's computation, so the fold would change behavior — throw rather than rewrite.";
  arguments_assert(arguments, 8);
  let x_canonical = js_block_canonical(pattern_sigs, params, return_local);
  let block_end = add(start, k);
  let block_sigs = list_slice(target_sigs, start, block_end);
  let b_canonical = js_block_canonical(block_sigs, arg_keys, output_name);
  let equivalent = equal(x_canonical, b_canonical);
  let differ = not(equivalent);
  if (differ) {
    error_json({
      hint: "fold equivalence check failed: matched block is not x's body",
      x: x_canonical,
      block: b_canonical,
    });
  }
  return;
}
