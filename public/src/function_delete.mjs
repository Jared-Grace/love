import { property_get } from "../../../love/public/src/property_get.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { data_files_update } from "../../../love/public/src/data_files_update.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
export async function function_delete(f_name) {
  const v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  let f_path = property_get(v, "f_path");
  assert(exists);
  await file_delete(f_path);
  return;
  await data_files_update();
}
