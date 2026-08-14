import { app_replace_rule_sets_prefix } from "./app_replace_rule_sets_prefix.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
import { app_replace_rule_sets_fns_names } from "./app_replace_rule_sets_fns_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { function_ast } from "./function_ast.mjs";
import { app_replace_rule_set_ast_shaped_is } from "./app_replace_rule_set_ast_shaped_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function app_replace_rule_sets_unlisted() {
  "Every finished exercise the repo writes that the app never shows: a file under the exercise prefix holding a name, its rules and its goals, whose function is missing from the one list the app reads.";
  "An exercise is reached only by being named in that list, so an exercise can be complete, correct and committed and still be invisible, with nothing anywhere going red. That is how Grow Same Three Different left the app on 2026-07-14: a new exercise was added by overwriting its line rather than by adding one, and the loss looked exactly like nothing happening.";
  "A record still called TODO is the blank template a new exercise is copied from, so it is not counted as finished.";
  let prefix = app_replace_rule_sets_prefix();
  let found = await functions_search_all(prefix);
  let names = object_property_names(found);
  let listed = app_replace_rule_sets_fns_names();
  let candidates = list_difference(names, listed);
  let unlisted = [];
  async function lambda(candidate) {
    let ast = await function_ast(candidate);
    let shaped = app_replace_rule_set_ast_shaped_is(ast);
    if (shaped) {
      list_add(unlisted, candidate);
    }
  }
  await each_async(candidates, lambda);
  return unlisted;
}
