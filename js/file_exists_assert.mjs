import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_exists_assert(path) {
  let exists = await file_exists(path);
  assert(exists);
}
