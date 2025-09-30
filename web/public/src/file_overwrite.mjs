import { string_is } from "../../../love/public/src/string_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
  let path = await import("path");
  let parsed = path.parse(file_path);
  let root = object_property_get(parsed, "root");
  let v = string_is(value);
  if (false) {
  }
  if (false) {
    await fs.access(parsed.root);
  }
}
