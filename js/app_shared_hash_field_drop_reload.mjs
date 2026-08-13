import { app_shared_hash_field_transform_reload } from "./app_shared_hash_field_transform_reload.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
export function app_shared_hash_field_drop_reload(field, value) {
  "Takes one word out of a field of the link and opens the page again - the way on for a reader when none of the offered corrections is what they meant.";
  "There is always this to press, even when nothing is spelled like what the link says, so a reader is never left on a page whose only choices are wrong. A field emptied this way falls back to whatever the page opens on when no link said anything, which is a real page and not another apology.";
  function lambda$values(values) {
    let values_after = list_filter_equal_not(values, value);
    return values_after;
  }
  app_shared_hash_field_transform_reload(field, lambda$values);
}
