import { file_root_exists } from "../../../love/public/src/file_root_exists.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { assert_json } from "./assert_json.mjs";
export async function file_overwrite(file_path, contents) {
  let { exists, root } = await file_root_exists(file_path);
  assert_json(exists, {
    file_path,
    root,
  });
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
  log(exists);
}
