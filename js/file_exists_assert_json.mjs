import { assert_json } from "./assert_json.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_exists_assert_json(path, json) {
  let exists = await file_exists(path);
  assert_json(exists, {
    path,
    json,
  });
}
