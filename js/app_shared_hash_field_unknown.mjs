import { app_shared_hash_field_values } from "./app_shared_hash_field_values.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_hash_field_unknown(hash, field) {
  "The words a link says for one of its fields that the field cannot make sense of - empty when the link is saying nothing but real ones.";
  "The field is asked whether each word is one of its own rather than being handed a list to look the word up in, because what counts as real differs by field: a language is one of a written-down set, a chapter is a book we have followed by a number, and a reader is one of two words. One shape of question covers all three, and a field added later answers it however it likes.";
  let values = app_shared_hash_field_values(hash, field);
  let valid_is = property_get(field, "valid_is");
  function unknown_is(value) {
    let known = valid_is(value);
    let value_unknown = not(known);
    return value_unknown;
  }
  let unknown = list_filter(values, unknown_is);
  return unknown;
}
