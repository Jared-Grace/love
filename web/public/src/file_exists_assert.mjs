import { assert } from "../../../love/public/src/assert.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_exists_assert(path) {
  let exists = await file_exists(path);
  assert(exists);
}
