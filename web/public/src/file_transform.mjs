import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_transform(f_path, lambda) {
  let contents = await file_read(f_path);
  let after = lambda(contents);
  let result = await file_overwrite(f_path, after);
}
