import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
import { js_property_key_named_is_curried_right } from "./js_property_key_named_is_curried_right.mjs";
import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_call_empty } from "./js_call_empty.mjs";
import { js_property_value_set } from "./js_property_value_set.mjs";
export function js_object_property_getter_set(
  ast,
  selects,
  key_name,
  getter_name,
) {
  arguments_assert(arguments, 4);
  ("Points one setting of a record at a constant's getter, naming the setting and");
  ("naming the constant. The pair to the verb that does this for an argument of a");
  ("call, for the half of the styling in this repo written as a record of settings");
  ("rather than as calls.");
  ("Without it that half stays a text edit however many verbs exist, which is how");
  ("a value ends up spelled out in one file and asked for by name in the next -");
  ("the two look the same until somebody changes the constant and only one of them");
  ("moves.");
  ("Both arguments are bare names, and the constant's name is checked to be only a");
  ("name before it is called, so this stays as approvable as the rest of the");
  ("family.");
  let properties = js_selects_object_properties(ast, selects);
  let named_is = js_property_key_named_is_curried_right(key_name);
  let found = list_find(properties, named_is);
  assert_json(found, {
    hint: "this record holds no setting by that name — would you like to check the spelling, or the record it sits in?",
    key_name,
  });
  let identifier = js_identifier_expression(getter_name);
  let value = js_call_empty(getter_name);
  js_property_value_set(found, value);
}
