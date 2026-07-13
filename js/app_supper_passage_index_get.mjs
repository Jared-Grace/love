import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { integer_to } from "./integer_to.mjs";
export function app_supper_passage_index_get() {
  let hash = html_hash_object_get();
  let sp = property_get_or_null(hash, "sp");
  let missing = null_is(sp);
  if (missing) {
    return 0;
  }
  let index = integer_to(sp);
  return index;
}
