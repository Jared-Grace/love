import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { equal } from "./equal.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_identifier_rename_checked } from "./function_identifier_rename_checked.mjs";
import { function_param_index } from "./function_param_index.mjs";
import { function_param_rename } from "./function_param_rename.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is_while_async } from "./list_empty_not_is_while_async.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_pop } from "./list_pop.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_param_rename_recursive(
  f_name,
  name,
  name_after,
) {
  "Give one of a function's parameters a better name and carry the change into every caller that hands the old spelling over, following the chain as far as it is passed along.";
  "The single rename ends at the function's edge on purpose - a call never says what the far end binds, so nothing outside needed to move. But that very guarantee makes it miss the spelling that is passed along: when the caller binds the value under the very same word the parameter wore, renaming the parameter leaves the caller saying what used to be, with nothing to connect the two edges but the position in the argument list.";
  "So the first duty is the single rename, and the second is the walk outward. The neighbours of a function - who actually calls it - are not a shape this syntax tree keeps, so finding them needs the same index the search does. For each caller that genuinely reaches back through a real call, the arm of the argument list matching the renamed parameter is looked at; where that arm is the word the parameter just shed, the word is renamed at that caller. If it was the caller's own parameter, the whole walk repeats from that caller - the spelling travels up the call chain as far as it is passed. If it was a local the caller bound, the rename stops there, because a local reaches no further edge.";
  "The worklist is walked in hand-made order on purpose. Renaming a caller's parameter changes what its own neighbours hand it, so a name can travel in from several directions at once - and then a function would be renamed for the first arrival and skipped for the second, which is not a walk that can be understood. Each function is finished - parameter renamed, local uses carried, neighbours found - before the next one is touched, and none is finished twice.";
  arguments_assert(arguments, 3);
  let known = await functions_names();
  let pending = [];
  let done = [];
  list_add(pending, f_name);
  async function step() {
    let one = list_pop(pending);
    let seen = list_includes(done, one);
    if (seen) {
      return;
    }
    list_add(done, one);
    let ast = await function_ast(one);
    let pv = function_param_index(ast, name);
    let index = property_get(pv, "index");
    await function_param_rename(one, name, name_after);
    let callers = await data_identifiers_search_names(one);
    for (let caller of callers) {
      let is_function = list_includes(known, caller);
      if (not(is_function)) {
        continue;
      }
      if (list_includes(done, caller)) {
        continue;
      }
      let caller_ast = await function_ast(caller);
      let passes = false;
      function lambda(frame) {
        let args = property_get(frame, "args");
        let arg = list_get(args, index);
        let arg_is_word = js_identifier_is(arg);
        if (arg_is_word) {
          let word = property_get_name(arg);
          if (equal(word, name)) {
            passes = true;
          }
        }
      }
      js_visit_calls_named(caller_ast, one, lambda);
      if (not(passes)) {
        continue;
      }
      let parsed = await function_parse_declaration(caller);
      let declaration = property_get(parsed, "declaration");
      let params = property_get(declaration, "params");
      let param = list_find_property_or_null(params, "name", name);
      if (param) {
        list_add(pending, caller);
      } else {
        let bound = js_binding_names(caller_ast);
        let is_bound = list_includes(bound, name);
        assert_json(is_bound, {
          hint: "the caller reads that name without binding it, so renaming it here would point the call at a word the caller never owns — bind it at the caller's own level first, or ask for the rename that follows the real scope",
          name,
          caller,
        });
        await function_identifier_rename_checked(caller, name, name_after);
      }
    }
  }
  await list_empty_not_is_while_async(pending, step);
  return done;
}
