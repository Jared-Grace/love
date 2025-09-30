import { file_root_exists } from "../../../love/public/src/file_root_exists.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
  let exists = await file_root_exists(file_path);
  log(exists);
}
