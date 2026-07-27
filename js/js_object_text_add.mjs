import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_string } from "./js_string.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_text_add(ast, selects, key_name, text) {
  arguments_assert(arguments, 4);
  ("Adds one entry to a record, under a name, holding a written sentence. The");
  ("third of the register-writing verbs and the one the curriculum needs: an");
  ("example has to be listed, grouped, and then said out loud in a line of prose,");
  ("and only the saying was still a hand edit.");
  ("A name and a sentence, and neither is a line to be worked out — so this stays");
  ("as safe to approve once as the rest of the family.");
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let properties = js_object_expression_properties(record);
  let key = js_identifier_expression(key_name);
  let value = js_string(text);
  let property = js_property_key_value(key, value);
  list_add(properties, property);
}
