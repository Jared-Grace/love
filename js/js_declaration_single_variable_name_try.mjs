import { property_get } from "./property_get.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
export function js_declaration_single_variable_name_try(variable) {
  let declarators = property_get(variable, "declarations");
  let one_is = list_size_1(declarators);
  if (not(one_is)) {
    let none = null;
    return none;
  }
  let id = list_get_property(declarators, 0, "id");
  let name = js_identifier_name_try(id);
  return name;
}
