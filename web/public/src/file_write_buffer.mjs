import { marker } from "./marker.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
export async function file_write_buffer(f_path, contents) {
  marker("1");
  await assert_file_exists_not(f_path);
  await file_overwrite(f_path, contents);
}
