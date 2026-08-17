import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fold_match_block } from "./js_fold_match_block.mjs";
import { null_is } from "./null_is.mjs";
export function js_fold_block_no_match(f_block, pattern_sigs, params) {
  arguments_assert(arguments, 3);
  let f_statements = property_get(f_block, "body");
  let target_sigs = list_map(f_statements, js_atomic_statement_signature);
  let match = js_fold_match_block(pattern_sigs, target_sigs, params);
  let no_match = null_is(match);
  let r = {
    f_statements,
    target_sigs,
    match,
    no_match,
  };
  return r;
}
