import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export function html_hash_property_delete(property_name) {
  "Take a word back out of the link, leaving everything else in it alone.";
  "Saying nothing and saying nothing-in-particular are different answers, and only taking the word out says the first. Setting it to an empty value leaves the word standing in the link with a blank after it, and every reader of that link then has to know that a blank means absent - which is a rule each of them would have to be told separately.";
  arguments_assert(arguments, 1);
  function transform(hash) {
    property_delete_if_exists(hash, property_name);
  }
  html_hash_transform(transform);
}
