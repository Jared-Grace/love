import { app_replace_rule_sets_prefix } from "./app_replace_rule_sets_prefix.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
import { app_replace_rule_sets_fns_names } from "./app_replace_rule_sets_fns_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { app_replace_rule_set_shaped_is } from "./app_replace_rule_set_shaped_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function app_replace_rule_sets_unlisted() {
  "Every finished exercise the repo defines that the app never shows: a function shaped like a rule set - a name, its rules and its goals, and no arguments to give it - whose name is missing from the one list the app reads.";
  "An exercise is reached only by being named in that list, so an exercise can be complete, correct and committed and still be invisible, with nothing anywhere going red. That is how Grow Same Three Different left the app on 2026-07-14: a new exercise was added by overwriting its line rather than by adding one, and the loss looked exactly like nothing happening.";
  "A set still called TODO is the blank template a new exercise is copied from, so it is not counted as finished.";
  let prefix = app_replace_rule_sets_prefix();
  let found = await functions_search_all(prefix);
  let names = object_property_names(found);
  let listed = app_replace_rule_sets_fns_names();
  let candidates = list_difference(names, listed);
  let unlisted = [];
  async function lambda(candidate) {
    let ast = await function_ast(candidate);
    let params = js_flo_params_get(ast);
    let takes_none = list_empty_is(params);
    if (takes_none) {
      async function lambda2() {
        let r = await function_run_args_none(candidate);
        return r;
      }
      let r = await catch_null_async(lambda2);
      let shaped = app_replace_rule_set_shaped_is(r);
      if (shaped) {
        list_add(unlisted, candidate);
      }
    }
  }
  await each_async(candidates, lambda);
  return unlisted;
}
