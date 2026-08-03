import { property_get } from "./property_get.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { equal_not } from "./equal_not.mjs";
import { each } from "./each.mjs";
export function js_declaration_record_of_plain_names_is(variable) {
  "true only when the record is written out right here and holds nothing but plain names, so reading it early can neither wait on anything nor go wrong";
  let declarators = property_get(variable, "declarations");
  let one_is = list_size_1(declarators);
  if (not(one_is)) {
    return false;
  }
  let init = list_get_property(declarators, 0, "init");
  let record_is = js_node_type_is(init, "ObjectExpression");
  if (not(record_is)) {
    return false;
  }
  let entries = property_get(init, "properties");
  let plain = true;
  function entry_each(entry) {
    let entry_is = js_node_type_is(entry, "Property");
    if (not(entry_is)) {
      plain = false;
      return;
    }
    let value = property_get(entry, "value");
    let named = js_identifier_name_try(value);
    let named_is = equal_not(named, null);
    if (not(named_is)) {
      plain = false;
    }
  }
  each(entries, entry_each);
  return plain;
}
