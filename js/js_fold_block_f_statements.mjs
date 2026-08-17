import { arguments_assert } from "./arguments_assert.mjs";
import { js_fold_block_no_match } from "./js_fold_block_no_match.mjs";
import { property_get } from "./property_get.mjs";
export function js_fold_block_f_statements(f_block, pattern_sigs, params) {
  arguments_assert(arguments, 3);
  let r3 = js_fold_block_no_match(f_block, pattern_sigs, params);
  let no_match = property_get(r3, "no_match");
  let match = property_get(r3, "match");
  let target_sigs = property_get(r3, "target_sigs");
  let f_statements = property_get(r3, "f_statements");
  let r = {
    no_match,
    match,
    target_sigs,
    f_statements,
  };
  return r;
}
