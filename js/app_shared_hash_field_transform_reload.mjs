import { app_shared_hash_field_set } from "./app_shared_hash_field_set.mjs";
import { app_shared_hash_field_values } from "./app_shared_hash_field_values.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
export function app_shared_hash_field_transform_reload(field, lambda$values) {
  "Changes what one field of the link says and opens the page again on the new link.";
  "The change is written into the address rather than kept on the page, so a correction somebody made is in the link they are then looking at - they can send it on, and the browser's own back button undoes it. It also means one press fixes one thing: a link with two words wrong redraws still asking about the second, and each answer is the reader's own.";
  function transform(hash) {
    let values = app_shared_hash_field_values(hash, field);
    let values_after = lambda$values(values);
    app_shared_hash_field_set(hash, field, values_after);
  }
  html_hash_transform_reload(transform);
}
