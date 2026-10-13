import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
export function app_shared_folder_known(app_name) {
  "$plain app_name";
  "The folder code this page already knows, or empty text when it knows none: from the link first, then from what app_name kept on this device.";
  "A code in the link wins over the one kept here, because a link sent for one folder must send into that folder. The link carries it after its #; a code after ? is still read, because links spelling it were already sent.";
  arguments_assert(arguments, 1);
  let key = text_frozen("folder_code");
  let key2 = text_frozen("folder");
  let hash = html_hash_object_get();
  let known = property_get_or_null(hash, key2);
  if (null_is(known)) {
    known = html_query_property_get(key2);
  }
  if (null_is(known)) {
    known = storage_local_name_get(app_name, key);
  }
  if (null_is(known)) {
    known = "";
  }
  let trimmed = known.trim();
  return trimmed;
}
