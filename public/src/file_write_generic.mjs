import { file_exists_not_assert } from "../../../love/public/src/file_exists_not_assert.mjs";
export async function file_write_generic(f_path, overwrite, contents) {
  await file_exists_not_assert(f_path);
  await overwrite(f_path, contents);
}
