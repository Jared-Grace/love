import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_property_key_set } from "./js_property_key_set.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
export function js_object_keys_prefix_rename(
  ast,
  selects,
  prefix_before,
  prefix_after,
) {
  "$plain prefix_before";
  "$plain prefix_after";
  arguments_assert(arguments, 4);
  ("Moves every entry of a record whose name starts with one word onto the same name starting with another, leaving each value exactly where it is.");
  ("A table keyed by function names spells each name as a plain key, which no function rename reaches - so when a whole run of functions takes a new start to its name, the table is left holding the old start and every lookup in it misses. Measured on the code lessons: renaming the app left all of their stored ids filed under names nothing answered to.");
  ("It refuses a record with no entry starting with the word asked for, because a move that quietly does nothing reads afterwards exactly like one that was carried out.");
  let properties = js_selects_object_properties(ast, selects);
  let moved = 0;
  for (let property of properties) {
    let name = js_property_key_name_try(property);
    if (null_is(name)) {
      continue;
    }
    let starts = text_starts_with(name, prefix_before);
    if (not(starts)) {
      continue;
    }
    let rest = text_prefix_without(name, prefix_before);
    let expression = js_identifier_expression(prefix_after + rest);
    js_property_key_set(property, expression);
    moved = moved + 1;
  }
  greater_than_equal_assert_json(moved, 1, {
    hint: "this record has no entry starting with that word - would you like to check the spelling or the line it is bound to?",
    prefix_before,
  });
  return moved;
}
