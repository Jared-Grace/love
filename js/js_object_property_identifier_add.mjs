import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_property } from "./js_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_property_identifier_add(
  ast,
  selects,
  key_name,
  identifier_name,
) {
  arguments_assert(arguments, 4);
  ("Puts one more name into a record under a name of its own: the shape every register in this repo is made of, where a word chosen by whoever visits stands for the thing to run.");
  ("ITS SISTER PUTS A WRITTEN WORD INTO A LIST HELD BY A RECORD, and that is a different shape entirely. A register does not keep a list of words - it keeps a name pointing at a name, and there was no verb for that, so registering anything at all was a hand edit every time.");
  ("BOTH HALVES HAVE TO BE ONE BARE NAME, and that is what keeps this safe to hand a standing approval. A parameter that could hold code covers everything code can say; one that has to be a plain name says exactly one thing, and the two checks below are what make that true rather than hoped for.");
  ("IT REFUSES A NAME THE RECORD ALREADY ANSWERS TO. Writing the same key twice leaves a record where the later entry quietly wins and the earlier one is unreachable, which reads as a registration that worked.");
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let already = js_object_expression_property_named_or_null(record, key_name);
  let b = not(already);
  assert_json(b, {
    hint: "this record already keeps something under that name — would you like to pick a name it does not answer to yet?",
    key_name,
  });
  let key = js_identifier_expression(key_name);
  let value = js_identifier_expression(identifier_name);
  let property = js_property(key, value);
  let properties = property_get(record, "properties");
  list_add(properties, property);
  return property;
}
