import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { and } from "./and.mjs";
import { js_declaration_single_variable_name_try } from "./js_declaration_single_variable_name_try.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_identifier_named_try } from "./js_identifier_named_try.mjs";
import { js_declaration_record_of_plain_names_is } from "./js_declaration_record_of_plain_names_is.mjs";
export function js_function_declaration_record_line_try(declaration) {
  arguments_assert(arguments, 1);
  ("the one line of the wrapper's body holding the record, when the body is nothing else");
  let f_body = property_get(declaration, "body");
  let inner = property_get(f_body, "body");
  let two_is = list_size_2(inner);
  if (not(two_is)) {
    let none = null;
    return none;
  }
  let first = list_get(inner, 0);
  let second = list_get(inner, 1);
  let variable_is = js_node_type_is(first, "VariableDeclaration");
  let return_is = js_node_type_is(second, "ReturnStatement");
  let shaped = and(variable_is, return_is);
  if (not(shaped)) {
    let none = null;
    return none;
  }
  let record_name = js_declaration_single_variable_name_try(first);
  let name_is = equal_not(record_name, null);
  if (not(name_is)) {
    let none = null;
    return none;
  }
  let handed = property_get(second, "argument");
  let same = js_identifier_named_try(handed, record_name);
  if (not(same)) {
    let none = null;
    return none;
  }
  let plain_is = js_declaration_record_of_plain_names_is(first);
  if (not(plain_is)) {
    let none = null;
    return none;
  }
  return first;
}
