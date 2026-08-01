import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { js_call_is } from "./js_call_is.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
export function js_atomic_statement_signature(statement) {
  arguments_assert(arguments, 1);
  ("A statement that binds nothing under a plain name has no signature to give, and");
  ("that includes a line taking several names apart at once. Such a line used to");
  ("reach the name reader and throw, which never showed while only a function's own");
  ("opening run of statements was ever read - the ones written inside an if or a loop");
  ("were simply never handed here.");
  let empty = {
    name: null,
    callee: null,
    args: [],
  };
  let declarator = js_declare_single(statement);
  let none = not(declarator);
  if (none) {
    return empty;
  }
  let id = property_get(declarator, "id");
  let taken_apart = js_identifier_not_is(id);
  if (taken_apart) {
    return empty;
  }
  let name = property_get_name(id);
  let init = js_declare_init_get(declarator);
  let callee = null;
  let arg_keys = [];
  let is_call = js_call_is(init);
  if (is_call) {
    callee = js_call_callee_name_try(init);
    let args = js_call_arguments_get(init);
    arg_keys = list_map(args, js_unparse);
  }
  let signature = {
    name: name,
    callee: callee,
    args: arg_keys,
  };
  return signature;
}
