import { file_write_generic } from "../../../love/public/src/file_write_generic.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
export async function file_write(f_path, contents) {
  let overwrite = file_overwrite;
  await file_write_generic(f_path, overwrite, contents);
}
