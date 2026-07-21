import { arguments_assert } from "./arguments_assert.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
import { js_fold_all } from "./js_fold_all.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function js_fold_auto(f_ast, x_asts) {
  "Auto-fold: fold F against a set of candidate fns WITHOUT naming which one — for each candidate that";
  "is foldable-shaped, fold every occurrence of it in F. Non-foldable candidates are skipped, so the";
  "candidate set can be a whole library. This is the safe-to-automate half of auto-DRY: reuse-folding";
  "into fns that already earned a name. Skips folding F into itself.";
  arguments_assert(arguments, 2);
  let f_name = js_flo_name(f_ast);
  function fold_one(x_ast) {
    let pattern = js_fn_fold_pattern(x_ast);
    let unfoldable = null_is(pattern);
    if (unfoldable) {
      return;
    }
    let x_name = property_get(pattern, "fn_name");
    let is_self = equal(x_name, f_name);
    if (is_self) {
      return;
    }
    js_fold_all(x_ast, f_ast);
  }
  each(x_asts, fold_one);
  return f_ast;
}
