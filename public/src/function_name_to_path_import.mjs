import { js_code_text } from "../../../love/public/src/js_code_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
export function function_name_to_path_import(import_, dictionary) {
  let value = object_property_get(dictionary, import_);
  let previous = folder_previous();
  let previous2 = folder_previous();
  let joined = path_join([previous, previous2, value]);
  const c = js_code_text(joined);
  return c;
}
