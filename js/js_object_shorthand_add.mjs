import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { js_property_shorthand } from "./js_property_shorthand.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_shorthand_add(ast, selects, identifier_name) {
  arguments_assert(arguments, 3);
  ("Adds one name to a set of settings written the short way, where the key and");
  ("the value are the same word. Every register in this repo is that shape — a");
  ("list of what an example may name, of what a gate must run — so this is the");
  ("verb that puts a newly written unit on the list that makes it reachable.");
  ("Adding one entry had no verb at all, so the way round it was to write the");
  ("whole set out again, which replaces every entry with whatever was typed. That");
  ("cost forty-five of them once. Adding one is the only safe shape.");
  let node = list_single(selects);
  let object_expression = js_node_value_get(node);
  let properties = js_object_expression_properties(object_expression);
  let identifier = js_identifier_expression(identifier_name);
  let property = js_property_shorthand(identifier);
  list_add(properties, property);
}
