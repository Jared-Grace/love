import { string_is } from "../../../love/public/src/string_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function file_root_exists(file_path) {
  let path = await import("path");
  let parsed = path.parse(file_path);
  let root = object_property_get(parsed, "root");
  let si = string_is(root);
  let exists = false;
  if (si) {
    let fs = await import("fs");
    exists = await fs.promises.access(parsed.root);
  }
  seni
  return exists;
}
