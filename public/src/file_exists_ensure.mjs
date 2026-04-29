import { file_overwrite_empty } from "../../../love/public/src/file_overwrite_empty.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
export async function file_exists_ensure(file_path) {
  let n = await file_exists_not(file_path);
  if (n) {
    await file_overwrite_empty(file_path);
  }
}
