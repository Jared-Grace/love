import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { add_1 } from "./add_1.mjs";
import { js_signature_match } from "./js_signature_match.mjs";
export function js_fold_match_block(pattern_sigs, target_sigs, params) {
  // Brick 3a: find where x's call-statements (pattern_sigs = x's body minus the return) appear as a
  // CONTIGUOUS block in F's statements (target_sigs), threading one binding through
  // js_signature_match. Contiguous — no gaps — so nothing moves and the fold is sound without a
  // purity oracle; interleaved-gap folds need side-effect commutativity and are deferred.
  // Slides a window of size k (no subsequence enumeration). Returns { start, binding } of the first
  // matching block, or null.
  arguments_assert(arguments, 3);
  let k = list_size(pattern_sigs);
  let n = list_size(target_sigs);
  let last_start = subtract(n, k);
  let start = 0;
  while (start <= last_start) {
    let binding = {};
    let matched = true;
    let i = 0;
    while (i < k) {
      let target_index = start + i;
      let pattern_sig = list_get(pattern_sigs, i);
      let target_sig = list_get(target_sigs, target_index);
      let next = js_signature_match(pattern_sig, target_sig, params, binding);
      let failed = null_is(next);
      if (failed) {
        matched = false;
        i = k;
      } else {
        binding = next;
        i = add_1(i);
      }
    }
    if (matched) {
      let result = { start: start, binding: binding };
      return result;
    }
    start = add_1(start);
  }
  return null;
}
