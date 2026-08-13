import { app_shared_hash_field_transform_reload } from "./app_shared_hash_field_transform_reload.mjs";
import { list_equal_swapped } from "./list_equal_swapped.mjs";
export function app_shared_hash_field_swap_reload(field, before, after) {
  "Puts one word in a field of the link where another stood, and opens the page again - what a reader presses to accept a correction that was offered to them.";
  function lambda$values(values) {
    let values_after = list_equal_swapped(values, before, after);
    return values_after;
  }
  app_shared_hash_field_transform_reload(field, lambda$values);
}
