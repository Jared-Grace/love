import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_property_expression } from "./js_property_expression.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_field_add(
  ast,
  selects,
  key_name,
  object_name,
  property_name,
) {
  arguments_assert(arguments, 5);
  ("Adds one entry to a record holding one field read out of something else in");
  ("scope. Three names and nothing to be worked out.");
  ("The rest of this family could write an entry whose value is a word or a name");
  ("already standing on its own. A record being built from another record is the");
  ("shape neither reaches, and it is the commonest one there is: a report");
  ("narrowing what it was handed keeps some fields and drops others, and every");
  ("kept field is exactly this.");
  ("Until this existed such a record could only be widened by writing a line, so");
  ("carrying one more field through a filter - a change that could say nothing");
  ("else - fell off the approved path and asked the human.");
  let properties = js_selects_object_properties(ast, selects);
  let key = js_identifier_expression(key_name);
  let value = js_property_expression(object_name, property_name);
  let property = js_property_key_value(key, value);
  list_add(properties, property);
}
