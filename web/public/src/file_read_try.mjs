import { file_read } from "../../../love/public/src/file_read.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_read_try(f_path) {
  let exists = await file_exists(f_path);
  let r3 = exists ? await file_read(f_path) : null;
  return r3;
}
