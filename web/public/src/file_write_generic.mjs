import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
export async function file_write_generic(f_path, overwrite, contents) {
  await assert_file_exists_not(f_path);
  await overwrite(f_path, contents);
}
