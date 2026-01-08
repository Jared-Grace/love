import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_transform(g_name, lambda) {
  let contents = await file_read(g_name);
  let after = lambda(contents);
  let result = await file_overwrite(g_name, after);
}
