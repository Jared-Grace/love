import { equal } from "./equal.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { each_object } from "./each_object.mjs";
import { property_delete } from "./property_delete.mjs";
export function app_chapter_group_hash_tidy() {
  "Takes out of the link the words that say nothing in this app: which of the two readers is open, because this app only ever has the whole-chapter one, and every word left with nothing after it.";
  "The reader this app shares with the bible app writes those words for the bible app's sake, and a link without them opens the same page, so they are taken out here rather than the shared reader being taught about one app.";
  html_hash_transform(transform);
  function transform(hash) {
    let property_name = app_shared_bible_mode_hash_key();
    property_delete_if_exists(hash, property_name);
    each_object(hash, lambda);
    function lambda(value, key) {
      if (equal(value, "")) {
        property_delete(hash, key);
      }
    }
  }
}
