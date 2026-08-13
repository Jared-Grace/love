import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_hash_field_set(hash, field, values) {
  "Writes what one field of a link should say, given as a list, in the shape the readers of that field read it out of.";
  "A list with nothing in it takes the word out of the link altogether rather than leaving it there saying nothing. A field left empty is read as a field naming one nameless thing, and every reader of it then fails on that - which is the very failure this whole family exists to prevent, arriving by the correction rather than by the link.";
  let key = property_get(field, "key");
  let none = list_empty_is(values);
  if (none) {
    property_delete_if_exists(hash, key);
    return;
  }
  let joined = list_join_plus(values);
  property_set(hash, key, joined);
}
