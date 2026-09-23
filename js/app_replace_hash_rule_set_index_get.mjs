import { app_replace_rule_set_hash_key } from "./app_replace_rule_set_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_set_hash_id } from "./app_replace_rule_set_hash_id.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { app_replace_hash_index_get } from "./app_replace_hash_index_get.mjs";
export function app_replace_hash_rule_set_index_get(hash, rule_sets) {
  "The place in the list of the rule set a link names, or null when the link names none or names one the app does not have.";
  "A link names a rule set by its word, and the word is compared in small letters, because a link typed out by hand loses its capitals first.";
  "A number is still read, counting from 1, because for a few hours links named rule sets that way and one may already have been sent. No rule set's word is made of digits alone, so the two can never be mistaken for each other.";
  let key = app_replace_rule_set_hash_key();
  let word = property_get_or_null(hash, key);
  if (null_is(word)) {
    return null;
  }
  let lower = text_lower_to(word);
  let ids = list_map(rule_sets, app_replace_rule_set_hash_id);
  let named = list_includes(ids, lower);
  if (named) {
    let index = list_index_of(ids, lower);
    return index;
  }
  let index2 = app_replace_hash_index_get(hash, key, rule_sets);
  return index2;
}
