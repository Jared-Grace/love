import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_fold_pattern_dropped } from "./js_fold_pattern_dropped.mjs";
export async function function_fold_pattern_dropped(f_name) {
  arguments_assert(arguments, 1);
  ("Every line of work in the named function that the fold's pattern leaves out, which is the same as asking whether this function can stand as a fold pattern at all.");
  ("Empty means the pattern the fold matches on really is this function's body, so a run of statements matching it can be replaced by a call and nothing is added. Anything listed is work a caller would silently receive on top of the lines it handed over.");
  ("Named separately from the reading it wraps so the question can be asked of a function by name, which is the form it is actually asked in - a fold is offered a name, not a parsed file.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let dropped = js_fold_pattern_dropped(ast);
  return dropped;
}
