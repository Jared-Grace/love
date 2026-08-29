import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { js_call_argument_names } from "./js_call_argument_names.mjs";
import { json_equal } from "./json_equal.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_call_forwarding_wrapper_name(node_call, enclosing) {
  arguments_assert(arguments, 2);
  ("the name of the function a call is written inside, when that call hands it the whole of its own parameter list, in order and nothing besides");
  ("a call of that shape gives its callee the very slot the function around it stands in. whatever fixed that parameter list fixed it for the callee too, one hop further down - so a name the callee never reads was demanded of it rather than asked for by it");
  ("nothing is the answer for a call standing in no function, in one with no name to ask about afterwards, or for a call that does anything at all to what it was given first. the last of those is decided by the reading of the arguments, which answers nothing rather than a partial list the moment one argument is worked out instead of passed on");
  let none_is = null_is(enclosing);
  if (none_is) {
    let none = null;
    return none;
  }
  let id = property_get(enclosing, "id");
  let named_is = js_identifier_is(id);
  if (not(named_is)) {
    let none = null;
    return none;
  }
  let params_names = js_function_declaration_params_names_plain(enclosing);
  let argument_names = js_call_argument_names(node_call);
  let forwards = json_equal(params_names, argument_names);
  if (not(forwards)) {
    let none = null;
    return none;
  }
  let name = property_get_name(id);
  return name;
}
