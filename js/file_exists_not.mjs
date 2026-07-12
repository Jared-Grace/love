import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_exists_not(path) {
  let exists = await file_exists(path);
  let n = not(exists);
  return n;
}
