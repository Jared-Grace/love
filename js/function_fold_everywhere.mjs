import { equal_not } from "./equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
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
  "soundness per site and leaves non-matching or unsafe files unchanged.";
  "Returns both lists, because they are not the same list and the difference is usually most of it.";
  "A candidate is only a file calling everything x calls; whether the calls sit next to each other in";
  "x's own order is settled per file, afterwards. Where x's callees are rare the two lists match and";
  ("the distinction is invisible - ",
    fn_name("list_map"),
    " with ",
    fn_name("list_concat_multiple"),
    " gave eleven of each. Where they");
  ("are common it is nearly all loss: ",
    fn_name("list_size"),
    " with ",
    fn_name("greater_than"),
    " gave twenty-three candidates and two");
  ("folds. This used to hand back the candidates alone, and reading that as the work done is how a");
  ("commit of two files got reported as twenty-three.");
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
    let before = await function_parse_declaration_js_unparse(f_name);
    let after = await function_fold(x_name, f_name);
    let changed = equal_not(before, after);
    let outcome = {
      f_name,
      changed,
    };
    return outcome;
  }
  let outcomes = await list_map_unordered_async(others, fold_into);
  let changed_outcomes = list_filter_property(outcomes, "changed", true);
  let folded = list_map_property(changed_outcomes, "f_name");
  folded.sort();
  let everywhere = {
    candidates: others,
    folded,
  };
  return everywhere;
}
