import { file_root_exists_assert } from "../../../love/public/src/file_root_exists_assert.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {

  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;  if (browser_is()) {
    let r = await app_api_cache_global_fn(file_overwrite, arguments);
    return r;
  }
}
