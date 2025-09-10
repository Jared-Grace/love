import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { marker } from "./marker.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
export async function file_write_buffer(f_path, contents) {
  marker("1");
  await assert_file_exists_not(f_path);
  await file_overwrite_buffer(f_path, contents);
}
