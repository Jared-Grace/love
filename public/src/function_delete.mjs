import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { data_files_update } from "../../../love/public/src/data_files_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
export async function function_delete(f_name) {
  marker("1");
  if (browser_is()) {
  }
  const v = await function_unalias_exists(f_name);
  let exists = object_property_get(v, "exists");
  let f_path = object_property_get(v, "f_path");
  assert(exists);
  await file_delete(f_path);
  await data_files_update();
}
