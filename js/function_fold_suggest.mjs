import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
import { js_fold_suggest } from "./js_fold_suggest.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function function_fold_suggest(f_name, x_names) {
  arguments_assert(arguments, 2);
  ("Advisory half of auto-DRY: report which of the named library fns already match a contiguous block");
  ("inside F — the fn you would have called instead of hand-writing the logic. Reports NEAR-MISSES too:");
  ("a block the rewrite pass would refuse (because an internal local is reused later) is still reported");
  ("here, which is the teaching signal. Nothing is mutated. Candidates that are not foldable-shaped are");
  ("dropped. Run it from the command line with the target fn name and a comma-joined candidate list.");
  let f_ast = await function_ast(f_name);
  let names = text_split_comma(x_names);
  async function to_pattern(x_name) {
    let x_ast = await function_ast(x_name);
    let pattern = js_fn_fold_pattern(x_ast);
    return pattern;
  }
  let patterns_all = await list_map_unordered_async(names, to_pattern);
  let patterns = list_filter(patterns_all, null_not_is);
  let suggestions = js_fold_suggest(f_ast, patterns);
  return suggestions;
}
