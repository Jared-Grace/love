import { arguments_assert } from "./arguments_assert.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_declare } from "./js_declare.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function js_expand_generic_lambda(body_block, last, v) {
  arguments_assert(arguments, 3);
  list_remove(body_block, last);
  let argument = property_get(last, "argument");
  let declaration_call = property_get(v, "declaration");
  let nnd = null_not_is(declaration_call);
  if (nnd) {
    let name_declared = js_function_declaration_name(declaration_call);
    let assign = js_declare(name_declared, argument);
    list_add(body_block, assign);
  } else {
    let assignment = property_get(v, "assignment");
    let nna = null_not_is(assignment);
    if (nna) {
      property_set(assignment, "right", argument);
      list_add(body_block, assignment);
    }
  }
}
