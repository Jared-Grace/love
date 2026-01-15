import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_exists_not(path) {
  let exists = await file_exists(path);
  const n = not(exists);
  return n;
}
