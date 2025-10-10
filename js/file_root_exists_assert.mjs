import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { file_root_exists } from "../../../love/public/src/file_root_exists.mjs";
export async function file_root_exists_assert(file_path) {
  let { exists, root } = await file_root_exists(file_path);
  assert_json(exists, {
    file_path,
    root,
    message: "root does not exist",
  });
}
