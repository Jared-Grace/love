import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_null } from "./js_null.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_null_add(ast, selects, key_name) {
  "$plain key_name";
  "Adds one entry to a record, under a name, holding nothing.";
  "The fourth of the record-widening verbs and the one the others could not stand in for. Its neighbours write an entry holding a word, a sentence, or a field read off something else in scope - all of them a value that is there. An entry that is deliberately empty had no verb at all, so writing one meant a line by hand.";
  "IT IS THE VERB THAT MAKES TWO WAYS OUT OF A FUNCTION AGREE. A function that leaves early names fewer entries than the one that does the work, and a reader asking the working answer's name is told nothing rather than told no - which reads the same as a name that was never there. Naming the entry and leaving it empty says no out loud, and it is the only change that can do so without touching what the function does.";
  "A name and nothing else, so it stays as safe to approve once as the rest of the family.";
  arguments_assert(arguments, 3);
  let properties = js_selects_object_properties(ast, selects);
  let key = js_identifier_expression(key_name);
  let value = js_null();
  let property = js_property_key_value(key, value);
  list_add(properties, property);
}
