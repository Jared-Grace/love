import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
export async function file_exists_ensure(file_path) {
  let n = await file_exists_not(file_path);
  if (n) {
    let r = await file_overwrite(file_path, "");
  }
}
