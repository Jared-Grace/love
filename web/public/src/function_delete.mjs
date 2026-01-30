import { assert } from "../../../love/public/src/assert.mjs";
import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
import { data_files_update } from "../../../love/public/src/data_files_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
export async function function_delete(f_name) {
  marker("1");
  const { f_path, exists } = await function_exists_unalias(f_name);
  assert(exists);
  await file_delete(f_path);
  await data_files_update();
}
