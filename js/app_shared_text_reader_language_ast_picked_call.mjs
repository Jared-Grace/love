import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_text_reader_language_ast_picked_call(
  ast,
  pickers,
  named_objects,
  named_calls,
) {
  arguments_assert(arguments, 4);
  let picked = [];
  let calls = js_list_type_nodes(ast, "CallExpression");
  for (let call of calls) {
    let picker = js_call_callee_name_try(call);
    let unnamed = null_is(picker);
    if (unnamed) {
      continue;
    }
    let ours = list_includes(pickers, picker);
    if (not(ours)) {
      continue;
    }
    let object = null;
    let held_by = null;
    ("the languages are always the first thing handed over, whichever way the saying is picked, so the rest of what a call takes is no business of this reading");
    let anything = list_empty_not_is(call.arguments);
    if (anything) {
      let argument = call.arguments[0];
      let written = equal(argument.type, "ObjectExpression");
      if (written) {
        object = argument;
      }
      let by_name = equal(argument.type, "Identifier");
      if (by_name) {
        object = property_get_or_null(named_objects, argument.name);
        held_by = property_get_or_null(named_calls, argument.name);
      }
      let fetched = equal(argument.type, "CallExpression");
      if (fetched) {
        let plain = list_empty_is(argument.arguments);
        if (plain) {
          held_by = js_call_callee_name_try(argument);
        }
      }
    }
    list_add(picked, {
      picker,
      object,
      held_by,
    });
  }
  return picked;
}
