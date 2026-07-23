import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
import { function_fold } from "./function_fold.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_without } from "./list_without.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { null_is } from "./null_is.mjs";
export async function function_fold_everywhere(x_name) {
  "Fold pure fn x into every place its body was hand-written across the whole repo, cheaply. Instead of";
  "parsing every file, use the identifier index to find just the files that call ALL of x's callees —";
  "the only files that could hold x's contiguous pattern — then fold x into each. The fold re-checks";
  "soundness per site and leaves non-matching or unsafe files unchanged. Returns the candidate names.";
  arguments_assert(arguments, 1);
  let x_ast = await function_ast(x_name);
  let pattern = js_fn_fold_pattern(x_ast);
  let unfoldable = null_is(pattern);
  if (unfoldable) {
    return null;
  }
  let pattern_sigs = property_get(pattern, "pattern_sigs");
  let unique_callees = list_map_property_unique(pattern_sigs, "callee");
  let ids_comma = list_join(unique_callees, ",");
  let candidates = await data_identifiers_search(ids_comma);
  let names = properties_get(candidates);
  let others = list_without(names, x_name);
  async function fold_into(f_name) {
    let folded = await function_fold(x_name, f_name);
    return folded;
  }
  await list_map_unordered_async(others, fold_into);
  return others;
}
