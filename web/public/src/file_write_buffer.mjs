import { file_write_generic } from "../../../love/public/src/file_write_generic.mjs";
import { file_overwrite_buffer } from "../../../love/public/src/file_overwrite_buffer.mjs";
export async function file_write_buffer(f_path, contents) {
  await file_write_generic(f_path, file_overwrite_buffer, contents);
}
