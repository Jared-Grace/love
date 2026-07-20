import { js_fold } from "./js_fold.mjs";
import { add } from "./add.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fold_match_block } from "./js_fold_match_block.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
export function js_fold_suggest(f_ast, patterns) {
  arguments_assert(arguments, 2);
  ("Discovery: given F and an index of foldable-fn patterns, report which library fns already match a");
  ("contiguous block of F — the fn you would have called instead of hand-writing the logic. Advisory:");
  ("each hit reports fn name, start index, and length; the actual fold (",
    js_fold.name,
    ") re-checks soundness");
  ("before rewriting. Skips a pattern that names F itself so a fn is never suggested to fold into itself.");
  let f_declaration = js_flo(f_ast);
  let f_block = property_get(f_declaration, "body");
  let f_statements = property_get(f_block, "body");
  let target_sigs = list_map(f_statements, js_atomic_statement_signature);
  let f_name = js_flo_name(f_ast);
  function collect(add) {
    function consider(pattern) {
      let fn_name = property_get(pattern, "fn_name");
      let is_self = equal(fn_name, f_name);
      if (is_self) {
        return;
      }
      let pattern_sigs = property_get(pattern, "pattern_sigs");
      let params = property_get(pattern, "params");
      let match = js_fold_match_block(pattern_sigs, target_sigs, params);
      let no_match = null_is(match);
      if (no_match) {
        return;
      }
      let start = property_get(match, "start");
      let length = list_size(pattern_sigs);
      let suggestion = {
        fn_name: fn_name,
        start: start,
        length: length,
      };
      add(suggestion);
    }
    each(patterns, consider);
  }
  let suggestions = list_adder(collect);
  return suggestions;
}
