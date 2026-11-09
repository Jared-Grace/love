import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_string } from "./js_string.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_set } from "./property_set.mjs";
import { js_property } from "./js_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_property_text_frozen_add(
  ast,
  selects,
  key_name,
  text,
) {
  arguments_assert(arguments, 4);
  ("Puts one more entry into a record: a bare name as its key, and as its value one written word that must never follow anything, held frozen so the canonicalizing pass leaves it a word.");
  ("THE SHAPE IS THE ONE EVERY STORED KEY TABLE IS MADE OF, the lesson ids first among them: the key is a function's own name and the value is a word already written into somebody's browser. Adding a lesson meant hand editing that table, and the safe overwrite refuses the table, so each new lesson waited on the human running a command.");
  ("ITS SISTERS put a name pointing at a name into a record, and a plain word into a list inside one. Neither freezes, and an unfrozen word that happens to spell a function here gets promoted into a reference to it.");
  ("IT REFUSES A NAME THE RECORD ALREADY ANSWERS TO, for the same reason the sister does: the later entry would quietly win, which reads as an addition that worked.");
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let already = js_object_expression_property_named_or_null(record, key_name);
  let b = not(already);
  assert_json(b, {
    hint: "this record already keeps something under that name — would you like to pick a name it does not answer to yet?",
    key_name,
  });
  let key = js_identifier_expression(key_name);
  let literal = js_string(text);
  let code_expression = text_combine_multiple([fn_name("text_frozen"), "(0)"]);
  let value = js_parse_expression(code_expression);
  property_set(value, "arguments", [literal]);
  let property = js_property(key, value);
  let properties = property_get(record, "properties");
  list_add(properties, property);
  return property;
}
